package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AwsApiGatewayStageDetails
 * Provides information about a version 1 Amazon API Gateway stage.
**/
public class AwsApiGatewayStageDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AccessLogSettings")
    public AwsApiGatewayAccessLogSettings accessLogSettings;
    public AwsApiGatewayStageDetails withAccessLogSettings(AwsApiGatewayAccessLogSettings accessLogSettings) {
        this.accessLogSettings = accessLogSettings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CacheClusterEnabled")
    public Boolean cacheClusterEnabled;
    public AwsApiGatewayStageDetails withCacheClusterEnabled(Boolean cacheClusterEnabled) {
        this.cacheClusterEnabled = cacheClusterEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CacheClusterSize")
    public String cacheClusterSize;
    public AwsApiGatewayStageDetails withCacheClusterSize(String cacheClusterSize) {
        this.cacheClusterSize = cacheClusterSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CacheClusterStatus")
    public String cacheClusterStatus;
    public AwsApiGatewayStageDetails withCacheClusterStatus(String cacheClusterStatus) {
        this.cacheClusterStatus = cacheClusterStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CanarySettings")
    public AwsApiGatewayCanarySettings canarySettings;
    public AwsApiGatewayStageDetails withCanarySettings(AwsApiGatewayCanarySettings canarySettings) {
        this.canarySettings = canarySettings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ClientCertificateId")
    public String clientCertificateId;
    public AwsApiGatewayStageDetails withClientCertificateId(String clientCertificateId) {
        this.clientCertificateId = clientCertificateId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CreatedDate")
    public String createdDate;
    public AwsApiGatewayStageDetails withCreatedDate(String createdDate) {
        this.createdDate = createdDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DeploymentId")
    public String deploymentId;
    public AwsApiGatewayStageDetails withDeploymentId(String deploymentId) {
        this.deploymentId = deploymentId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Description")
    public String description;
    public AwsApiGatewayStageDetails withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DocumentationVersion")
    public String documentationVersion;
    public AwsApiGatewayStageDetails withDocumentationVersion(String documentationVersion) {
        this.documentationVersion = documentationVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LastUpdatedDate")
    public String lastUpdatedDate;
    public AwsApiGatewayStageDetails withLastUpdatedDate(String lastUpdatedDate) {
        this.lastUpdatedDate = lastUpdatedDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MethodSettings")
    public AwsApiGatewayMethodSettings[] methodSettings;
    public AwsApiGatewayStageDetails withMethodSettings(AwsApiGatewayMethodSettings[] methodSettings) {
        this.methodSettings = methodSettings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StageName")
    public String stageName;
    public AwsApiGatewayStageDetails withStageName(String stageName) {
        this.stageName = stageName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TracingEnabled")
    public Boolean tracingEnabled;
    public AwsApiGatewayStageDetails withTracingEnabled(Boolean tracingEnabled) {
        this.tracingEnabled = tracingEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Variables")
    public java.util.Map<String, String> variables;
    public AwsApiGatewayStageDetails withVariables(java.util.Map<String, String> variables) {
        this.variables = variables;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("WebAclArn")
    public String webAclArn;
    public AwsApiGatewayStageDetails withWebAclArn(String webAclArn) {
        this.webAclArn = webAclArn;
        return this;
    }
}