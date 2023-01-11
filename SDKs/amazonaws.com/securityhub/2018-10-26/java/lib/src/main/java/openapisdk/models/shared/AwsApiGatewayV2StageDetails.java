package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AwsApiGatewayV2StageDetails
 * Contains information about a version 2 stage for Amazon API Gateway.
**/
public class AwsApiGatewayV2StageDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AccessLogSettings")
    public AwsApiGatewayAccessLogSettings accessLogSettings;
    public AwsApiGatewayV2StageDetails withAccessLogSettings(AwsApiGatewayAccessLogSettings accessLogSettings) {
        this.accessLogSettings = accessLogSettings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ApiGatewayManaged")
    public Boolean apiGatewayManaged;
    public AwsApiGatewayV2StageDetails withApiGatewayManaged(Boolean apiGatewayManaged) {
        this.apiGatewayManaged = apiGatewayManaged;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AutoDeploy")
    public Boolean autoDeploy;
    public AwsApiGatewayV2StageDetails withAutoDeploy(Boolean autoDeploy) {
        this.autoDeploy = autoDeploy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ClientCertificateId")
    public String clientCertificateId;
    public AwsApiGatewayV2StageDetails withClientCertificateId(String clientCertificateId) {
        this.clientCertificateId = clientCertificateId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CreatedDate")
    public String createdDate;
    public AwsApiGatewayV2StageDetails withCreatedDate(String createdDate) {
        this.createdDate = createdDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DefaultRouteSettings")
    public AwsApiGatewayV2RouteSettings defaultRouteSettings;
    public AwsApiGatewayV2StageDetails withDefaultRouteSettings(AwsApiGatewayV2RouteSettings defaultRouteSettings) {
        this.defaultRouteSettings = defaultRouteSettings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DeploymentId")
    public String deploymentId;
    public AwsApiGatewayV2StageDetails withDeploymentId(String deploymentId) {
        this.deploymentId = deploymentId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Description")
    public String description;
    public AwsApiGatewayV2StageDetails withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LastDeploymentStatusMessage")
    public String lastDeploymentStatusMessage;
    public AwsApiGatewayV2StageDetails withLastDeploymentStatusMessage(String lastDeploymentStatusMessage) {
        this.lastDeploymentStatusMessage = lastDeploymentStatusMessage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LastUpdatedDate")
    public String lastUpdatedDate;
    public AwsApiGatewayV2StageDetails withLastUpdatedDate(String lastUpdatedDate) {
        this.lastUpdatedDate = lastUpdatedDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RouteSettings")
    public AwsApiGatewayV2RouteSettings routeSettings;
    public AwsApiGatewayV2StageDetails withRouteSettings(AwsApiGatewayV2RouteSettings routeSettings) {
        this.routeSettings = routeSettings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StageName")
    public String stageName;
    public AwsApiGatewayV2StageDetails withStageName(String stageName) {
        this.stageName = stageName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StageVariables")
    public java.util.Map<String, String> stageVariables;
    public AwsApiGatewayV2StageDetails withStageVariables(java.util.Map<String, String> stageVariables) {
        this.stageVariables = stageVariables;
        return this;
    }
}