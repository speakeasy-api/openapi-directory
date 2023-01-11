package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class DescribeDeploymentJobResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("arn")
    public String arn;
    public DescribeDeploymentJobResponse withArn(String arn) {
        this.arn = arn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("createdAt")
    public OffsetDateTime createdAt;
    public DescribeDeploymentJobResponse withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deploymentApplicationConfigs")
    public DeploymentApplicationConfig[] deploymentApplicationConfigs;
    public DescribeDeploymentJobResponse withDeploymentApplicationConfigs(DeploymentApplicationConfig[] deploymentApplicationConfigs) {
        this.deploymentApplicationConfigs = deploymentApplicationConfigs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deploymentConfig")
    public DeploymentConfig deploymentConfig;
    public DescribeDeploymentJobResponse withDeploymentConfig(DeploymentConfig deploymentConfig) {
        this.deploymentConfig = deploymentConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("failureCode")
    public DeploymentJobErrorCodeEnum failureCode;
    public DescribeDeploymentJobResponse withFailureCode(DeploymentJobErrorCodeEnum failureCode) {
        this.failureCode = failureCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("failureReason")
    public String failureReason;
    public DescribeDeploymentJobResponse withFailureReason(String failureReason) {
        this.failureReason = failureReason;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fleet")
    public String fleet;
    public DescribeDeploymentJobResponse withFleet(String fleet) {
        this.fleet = fleet;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("robotDeploymentSummary")
    public RobotDeployment[] robotDeploymentSummary;
    public DescribeDeploymentJobResponse withRobotDeploymentSummary(RobotDeployment[] robotDeploymentSummary) {
        this.robotDeploymentSummary = robotDeploymentSummary;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public DeploymentStatusEnum status;
    public DescribeDeploymentJobResponse withStatus(DeploymentStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public java.util.Map<String, String> tags;
    public DescribeDeploymentJobResponse withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
}