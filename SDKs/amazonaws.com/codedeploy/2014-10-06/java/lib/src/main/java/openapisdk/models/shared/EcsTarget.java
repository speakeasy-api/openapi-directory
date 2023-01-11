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
 * EcsTarget
 *  Information about the target of an Amazon ECS deployment. 
**/
public class EcsTarget {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deploymentId")
    public String deploymentId;
    public EcsTarget withDeploymentId(String deploymentId) {
        this.deploymentId = deploymentId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("lastUpdatedAt")
    public OffsetDateTime lastUpdatedAt;
    public EcsTarget withLastUpdatedAt(OffsetDateTime lastUpdatedAt) {
        this.lastUpdatedAt = lastUpdatedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lifecycleEvents")
    public LifecycleEvent[] lifecycleEvents;
    public EcsTarget withLifecycleEvents(LifecycleEvent[] lifecycleEvents) {
        this.lifecycleEvents = lifecycleEvents;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public TargetStatusEnum status;
    public EcsTarget withStatus(TargetStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetArn")
    public String targetArn;
    public EcsTarget withTargetArn(String targetArn) {
        this.targetArn = targetArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetId")
    public String targetId;
    public EcsTarget withTargetId(String targetId) {
        this.targetId = targetId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taskSetsInfo")
    public EcsTaskSet[] taskSetsInfo;
    public EcsTarget withTaskSetsInfo(EcsTaskSet[] taskSetsInfo) {
        this.taskSetsInfo = taskSetsInfo;
        return this;
    }
}