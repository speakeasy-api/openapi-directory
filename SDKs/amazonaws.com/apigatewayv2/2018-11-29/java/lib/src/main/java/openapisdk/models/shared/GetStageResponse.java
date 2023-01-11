package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetStageResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AccessLogSettings")
    public GetStageResponseAccessLogSettings accessLogSettings;
    public GetStageResponse withAccessLogSettings(GetStageResponseAccessLogSettings accessLogSettings) {
        this.accessLogSettings = accessLogSettings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ApiGatewayManaged")
    public java.util.Map<String, Object> apiGatewayManaged;
    public GetStageResponse withApiGatewayManaged(java.util.Map<String, Object> apiGatewayManaged) {
        this.apiGatewayManaged = apiGatewayManaged;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AutoDeploy")
    public java.util.Map<String, Object> autoDeploy;
    public GetStageResponse withAutoDeploy(java.util.Map<String, Object> autoDeploy) {
        this.autoDeploy = autoDeploy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ClientCertificateId")
    public java.util.Map<String, Object> clientCertificateId;
    public GetStageResponse withClientCertificateId(java.util.Map<String, Object> clientCertificateId) {
        this.clientCertificateId = clientCertificateId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CreatedDate")
    public java.util.Map<String, Object> createdDate;
    public GetStageResponse withCreatedDate(java.util.Map<String, Object> createdDate) {
        this.createdDate = createdDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DefaultRouteSettings")
    public GetStageResponseDefaultRouteSettings defaultRouteSettings;
    public GetStageResponse withDefaultRouteSettings(GetStageResponseDefaultRouteSettings defaultRouteSettings) {
        this.defaultRouteSettings = defaultRouteSettings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DeploymentId")
    public java.util.Map<String, Object> deploymentId;
    public GetStageResponse withDeploymentId(java.util.Map<String, Object> deploymentId) {
        this.deploymentId = deploymentId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Description")
    public java.util.Map<String, Object> description;
    public GetStageResponse withDescription(java.util.Map<String, Object> description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LastDeploymentStatusMessage")
    public java.util.Map<String, Object> lastDeploymentStatusMessage;
    public GetStageResponse withLastDeploymentStatusMessage(java.util.Map<String, Object> lastDeploymentStatusMessage) {
        this.lastDeploymentStatusMessage = lastDeploymentStatusMessage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LastUpdatedDate")
    public java.util.Map<String, Object> lastUpdatedDate;
    public GetStageResponse withLastUpdatedDate(java.util.Map<String, Object> lastUpdatedDate) {
        this.lastUpdatedDate = lastUpdatedDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RouteSettings")
    public java.util.Map<String, RouteSettings> routeSettings;
    public GetStageResponse withRouteSettings(java.util.Map<String, RouteSettings> routeSettings) {
        this.routeSettings = routeSettings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StageName")
    public java.util.Map<String, Object> stageName;
    public GetStageResponse withStageName(java.util.Map<String, Object> stageName) {
        this.stageName = stageName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StageVariables")
    public java.util.Map<String, String> stageVariables;
    public GetStageResponse withStageVariables(java.util.Map<String, String> stageVariables) {
        this.stageVariables = stageVariables;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Tags")
    public java.util.Map<String, String> tags;
    public GetStageResponse withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
}