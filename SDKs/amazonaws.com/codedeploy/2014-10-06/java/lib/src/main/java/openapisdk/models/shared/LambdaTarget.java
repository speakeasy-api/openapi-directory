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
 * LambdaTarget
 *  Information about the target AWS Lambda function during an AWS Lambda deployment. 
**/
public class LambdaTarget {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deploymentId")
    public String deploymentId;
    public LambdaTarget withDeploymentId(String deploymentId) {
        this.deploymentId = deploymentId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lambdaFunctionInfo")
    public LambdaFunctionInfo lambdaFunctionInfo;
    public LambdaTarget withLambdaFunctionInfo(LambdaFunctionInfo lambdaFunctionInfo) {
        this.lambdaFunctionInfo = lambdaFunctionInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("lastUpdatedAt")
    public OffsetDateTime lastUpdatedAt;
    public LambdaTarget withLastUpdatedAt(OffsetDateTime lastUpdatedAt) {
        this.lastUpdatedAt = lastUpdatedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lifecycleEvents")
    public LifecycleEvent[] lifecycleEvents;
    public LambdaTarget withLifecycleEvents(LifecycleEvent[] lifecycleEvents) {
        this.lifecycleEvents = lifecycleEvents;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public TargetStatusEnum status;
    public LambdaTarget withStatus(TargetStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetArn")
    public String targetArn;
    public LambdaTarget withTargetArn(String targetArn) {
        this.targetArn = targetArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetId")
    public String targetId;
    public LambdaTarget withTargetId(String targetId) {
        this.targetId = targetId;
        return this;
    }
}