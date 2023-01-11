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
 * RemediationExecutionStatus
 * Provides details of the current status of the invoked remediation action for that resource.
**/
public class RemediationExecutionStatus {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("InvocationTime")
    public OffsetDateTime invocationTime;
    public RemediationExecutionStatus withInvocationTime(OffsetDateTime invocationTime) {
        this.invocationTime = invocationTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("LastUpdatedTime")
    public OffsetDateTime lastUpdatedTime;
    public RemediationExecutionStatus withLastUpdatedTime(OffsetDateTime lastUpdatedTime) {
        this.lastUpdatedTime = lastUpdatedTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ResourceKey")
    public ResourceKey resourceKey;
    public RemediationExecutionStatus withResourceKey(ResourceKey resourceKey) {
        this.resourceKey = resourceKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("State")
    public RemediationExecutionStateEnum state;
    public RemediationExecutionStatus withState(RemediationExecutionStateEnum state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StepDetails")
    public RemediationExecutionStep[] stepDetails;
    public RemediationExecutionStatus withStepDetails(RemediationExecutionStep[] stepDetails) {
        this.stepDetails = stepDetails;
        return this;
    }
}