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
 * InstanceTarget
 *  A target Amazon EC2 or on-premises instance during a deployment that uses the EC2/On-premises compute platform. 
**/
public class InstanceTarget {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deploymentId")
    public String deploymentId;
    public InstanceTarget withDeploymentId(String deploymentId) {
        this.deploymentId = deploymentId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("instanceLabel")
    public TargetLabelEnum instanceLabel;
    public InstanceTarget withInstanceLabel(TargetLabelEnum instanceLabel) {
        this.instanceLabel = instanceLabel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("lastUpdatedAt")
    public OffsetDateTime lastUpdatedAt;
    public InstanceTarget withLastUpdatedAt(OffsetDateTime lastUpdatedAt) {
        this.lastUpdatedAt = lastUpdatedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lifecycleEvents")
    public LifecycleEvent[] lifecycleEvents;
    public InstanceTarget withLifecycleEvents(LifecycleEvent[] lifecycleEvents) {
        this.lifecycleEvents = lifecycleEvents;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public TargetStatusEnum status;
    public InstanceTarget withStatus(TargetStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetArn")
    public String targetArn;
    public InstanceTarget withTargetArn(String targetArn) {
        this.targetArn = targetArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetId")
    public String targetId;
    public InstanceTarget withTargetId(String targetId) {
        this.targetId = targetId;
        return this;
    }
}