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
 * RobotDeployment
 * Information about a robot deployment.
**/
public class RobotDeployment {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("arn")
    public String arn;
    public RobotDeployment withArn(String arn) {
        this.arn = arn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("deploymentFinishTime")
    public OffsetDateTime deploymentFinishTime;
    public RobotDeployment withDeploymentFinishTime(OffsetDateTime deploymentFinishTime) {
        this.deploymentFinishTime = deploymentFinishTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("deploymentStartTime")
    public OffsetDateTime deploymentStartTime;
    public RobotDeployment withDeploymentStartTime(OffsetDateTime deploymentStartTime) {
        this.deploymentStartTime = deploymentStartTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("failureCode")
    public DeploymentJobErrorCodeEnum failureCode;
    public RobotDeployment withFailureCode(DeploymentJobErrorCodeEnum failureCode) {
        this.failureCode = failureCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("failureReason")
    public String failureReason;
    public RobotDeployment withFailureReason(String failureReason) {
        this.failureReason = failureReason;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("progressDetail")
    public ProgressDetail progressDetail;
    public RobotDeployment withProgressDetail(ProgressDetail progressDetail) {
        this.progressDetail = progressDetail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public RobotStatusEnum status;
    public RobotDeployment withStatus(RobotStatusEnum status) {
        this.status = status;
        return this;
    }
}