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
 * DeploymentJob
 * Information about a deployment job.
**/
public class DeploymentJob {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("arn")
    public String arn;
    public DeploymentJob withArn(String arn) {
        this.arn = arn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("createdAt")
    public OffsetDateTime createdAt;
    public DeploymentJob withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deploymentApplicationConfigs")
    public DeploymentApplicationConfig[] deploymentApplicationConfigs;
    public DeploymentJob withDeploymentApplicationConfigs(DeploymentApplicationConfig[] deploymentApplicationConfigs) {
        this.deploymentApplicationConfigs = deploymentApplicationConfigs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deploymentConfig")
    public DeploymentConfig deploymentConfig;
    public DeploymentJob withDeploymentConfig(DeploymentConfig deploymentConfig) {
        this.deploymentConfig = deploymentConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("failureCode")
    public DeploymentJobErrorCodeEnum failureCode;
    public DeploymentJob withFailureCode(DeploymentJobErrorCodeEnum failureCode) {
        this.failureCode = failureCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("failureReason")
    public String failureReason;
    public DeploymentJob withFailureReason(String failureReason) {
        this.failureReason = failureReason;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fleet")
    public String fleet;
    public DeploymentJob withFleet(String fleet) {
        this.fleet = fleet;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public DeploymentStatusEnum status;
    public DeploymentJob withStatus(DeploymentStatusEnum status) {
        this.status = status;
        return this;
    }
}