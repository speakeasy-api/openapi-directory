package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * DeploymentConfigInfo
 * Information about a deployment configuration.
**/
public class DeploymentConfigInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("computePlatform")
    public ComputePlatformEnum computePlatform;
    public DeploymentConfigInfo withComputePlatform(ComputePlatformEnum computePlatform) {
        this.computePlatform = computePlatform;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("createTime")
    public OffsetDateTime createTime;
    public DeploymentConfigInfo withCreateTime(OffsetDateTime createTime) {
        this.createTime = createTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deploymentConfigId")
    public String deploymentConfigId;
    public DeploymentConfigInfo withDeploymentConfigId(String deploymentConfigId) {
        this.deploymentConfigId = deploymentConfigId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deploymentConfigName")
    public String deploymentConfigName;
    public DeploymentConfigInfo withDeploymentConfigName(String deploymentConfigName) {
        this.deploymentConfigName = deploymentConfigName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("minimumHealthyHosts")
    public MinimumHealthyHosts minimumHealthyHosts;
    public DeploymentConfigInfo withMinimumHealthyHosts(MinimumHealthyHosts minimumHealthyHosts) {
        this.minimumHealthyHosts = minimumHealthyHosts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("trafficRoutingConfig")
    public TrafficRoutingConfig trafficRoutingConfig;
    public DeploymentConfigInfo withTrafficRoutingConfig(TrafficRoutingConfig trafficRoutingConfig) {
        this.trafficRoutingConfig = trafficRoutingConfig;
        return this;
    }
}