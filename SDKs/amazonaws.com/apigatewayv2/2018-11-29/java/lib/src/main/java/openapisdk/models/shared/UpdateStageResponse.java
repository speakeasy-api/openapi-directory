package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateStageResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AccessLogSettings")
    public UpdateStageResponseAccessLogSettings accessLogSettings;
    public UpdateStageResponse withAccessLogSettings(UpdateStageResponseAccessLogSettings accessLogSettings) {
        this.accessLogSettings = accessLogSettings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ApiGatewayManaged")
    public java.util.Map<String, Object> apiGatewayManaged;
    public UpdateStageResponse withApiGatewayManaged(java.util.Map<String, Object> apiGatewayManaged) {
        this.apiGatewayManaged = apiGatewayManaged;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AutoDeploy")
    public java.util.Map<String, Object> autoDeploy;
    public UpdateStageResponse withAutoDeploy(java.util.Map<String, Object> autoDeploy) {
        this.autoDeploy = autoDeploy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ClientCertificateId")
    public java.util.Map<String, Object> clientCertificateId;
    public UpdateStageResponse withClientCertificateId(java.util.Map<String, Object> clientCertificateId) {
        this.clientCertificateId = clientCertificateId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CreatedDate")
    public java.util.Map<String, Object> createdDate;
    public UpdateStageResponse withCreatedDate(java.util.Map<String, Object> createdDate) {
        this.createdDate = createdDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DefaultRouteSettings")
    public UpdateStageResponseDefaultRouteSettings defaultRouteSettings;
    public UpdateStageResponse withDefaultRouteSettings(UpdateStageResponseDefaultRouteSettings defaultRouteSettings) {
        this.defaultRouteSettings = defaultRouteSettings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DeploymentId")
    public java.util.Map<String, Object> deploymentId;
    public UpdateStageResponse withDeploymentId(java.util.Map<String, Object> deploymentId) {
        this.deploymentId = deploymentId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Description")
    public java.util.Map<String, Object> description;
    public UpdateStageResponse withDescription(java.util.Map<String, Object> description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LastDeploymentStatusMessage")
    public java.util.Map<String, Object> lastDeploymentStatusMessage;
    public UpdateStageResponse withLastDeploymentStatusMessage(java.util.Map<String, Object> lastDeploymentStatusMessage) {
        this.lastDeploymentStatusMessage = lastDeploymentStatusMessage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LastUpdatedDate")
    public java.util.Map<String, Object> lastUpdatedDate;
    public UpdateStageResponse withLastUpdatedDate(java.util.Map<String, Object> lastUpdatedDate) {
        this.lastUpdatedDate = lastUpdatedDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RouteSettings")
    public java.util.Map<String, RouteSettings> routeSettings;
    public UpdateStageResponse withRouteSettings(java.util.Map<String, RouteSettings> routeSettings) {
        this.routeSettings = routeSettings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StageName")
    public java.util.Map<String, Object> stageName;
    public UpdateStageResponse withStageName(java.util.Map<String, Object> stageName) {
        this.stageName = stageName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StageVariables")
    public java.util.Map<String, String> stageVariables;
    public UpdateStageResponse withStageVariables(java.util.Map<String, String> stageVariables) {
        this.stageVariables = stageVariables;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Tags")
    public java.util.Map<String, String> tags;
    public UpdateStageResponse withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
}