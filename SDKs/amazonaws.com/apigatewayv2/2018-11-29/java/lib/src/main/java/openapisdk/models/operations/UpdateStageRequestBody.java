package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateStageRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accessLogSettings")
    public UpdateStageRequestBodyAccessLogSettings accessLogSettings;
    public UpdateStageRequestBody withAccessLogSettings(UpdateStageRequestBodyAccessLogSettings accessLogSettings) {
        this.accessLogSettings = accessLogSettings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("autoDeploy")
    public Boolean autoDeploy;
    public UpdateStageRequestBody withAutoDeploy(Boolean autoDeploy) {
        this.autoDeploy = autoDeploy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientCertificateId")
    public String clientCertificateId;
    public UpdateStageRequestBody withClientCertificateId(String clientCertificateId) {
        this.clientCertificateId = clientCertificateId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("defaultRouteSettings")
    public UpdateStageRequestBodyDefaultRouteSettings defaultRouteSettings;
    public UpdateStageRequestBody withDefaultRouteSettings(UpdateStageRequestBodyDefaultRouteSettings defaultRouteSettings) {
        this.defaultRouteSettings = defaultRouteSettings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deploymentId")
    public String deploymentId;
    public UpdateStageRequestBody withDeploymentId(String deploymentId) {
        this.deploymentId = deploymentId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public UpdateStageRequestBody withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("routeSettings")
    public java.util.Map<String, openapisdk.models.shared.RouteSettings> routeSettings;
    public UpdateStageRequestBody withRouteSettings(java.util.Map<String, openapisdk.models.shared.RouteSettings> routeSettings) {
        this.routeSettings = routeSettings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stageVariables")
    public java.util.Map<String, String> stageVariables;
    public UpdateStageRequestBody withStageVariables(java.util.Map<String, String> stageVariables) {
        this.stageVariables = stageVariables;
        return this;
    }
}