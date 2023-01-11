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
 * CloudFormationTarget
 *  Information about the target to be updated by an AWS CloudFormation blue/green deployment. This target type is used for all deployments initiated by a CloudFormation stack update.
**/
public class CloudFormationTarget {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deploymentId")
    public String deploymentId;
    public CloudFormationTarget withDeploymentId(String deploymentId) {
        this.deploymentId = deploymentId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("lastUpdatedAt")
    public OffsetDateTime lastUpdatedAt;
    public CloudFormationTarget withLastUpdatedAt(OffsetDateTime lastUpdatedAt) {
        this.lastUpdatedAt = lastUpdatedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lifecycleEvents")
    public LifecycleEvent[] lifecycleEvents;
    public CloudFormationTarget withLifecycleEvents(LifecycleEvent[] lifecycleEvents) {
        this.lifecycleEvents = lifecycleEvents;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceType")
    public String resourceType;
    public CloudFormationTarget withResourceType(String resourceType) {
        this.resourceType = resourceType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public TargetStatusEnum status;
    public CloudFormationTarget withStatus(TargetStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetId")
    public String targetId;
    public CloudFormationTarget withTargetId(String targetId) {
        this.targetId = targetId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetVersionWeight")
    public Double targetVersionWeight;
    public CloudFormationTarget withTargetVersionWeight(Double targetVersionWeight) {
        this.targetVersionWeight = targetVersionWeight;
        return this;
    }
}