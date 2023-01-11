package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateStageRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accessLogSettings")
    public CreateStageRequestBodyAccessLogSettings accessLogSettings;
    public CreateStageRequestBody withAccessLogSettings(CreateStageRequestBodyAccessLogSettings accessLogSettings) {
        this.accessLogSettings = accessLogSettings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("autoDeploy")
    public Boolean autoDeploy;
    public CreateStageRequestBody withAutoDeploy(Boolean autoDeploy) {
        this.autoDeploy = autoDeploy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientCertificateId")
    public String clientCertificateId;
    public CreateStageRequestBody withClientCertificateId(String clientCertificateId) {
        this.clientCertificateId = clientCertificateId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("defaultRouteSettings")
    public CreateStageRequestBodyDefaultRouteSettings defaultRouteSettings;
    public CreateStageRequestBody withDefaultRouteSettings(CreateStageRequestBodyDefaultRouteSettings defaultRouteSettings) {
        this.defaultRouteSettings = defaultRouteSettings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deploymentId")
    public String deploymentId;
    public CreateStageRequestBody withDeploymentId(String deploymentId) {
        this.deploymentId = deploymentId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public CreateStageRequestBody withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("routeSettings")
    public java.util.Map<String, openapisdk.models.shared.RouteSettings> routeSettings;
    public CreateStageRequestBody withRouteSettings(java.util.Map<String, openapisdk.models.shared.RouteSettings> routeSettings) {
        this.routeSettings = routeSettings;
        return this;
    }
    @JsonProperty("stageName")
    public String stageName;
    public CreateStageRequestBody withStageName(String stageName) {
        this.stageName = stageName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stageVariables")
    public java.util.Map<String, String> stageVariables;
    public CreateStageRequestBody withStageVariables(java.util.Map<String, String> stageVariables) {
        this.stageVariables = stageVariables;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public java.util.Map<String, String> tags;
    public CreateStageRequestBody withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
}