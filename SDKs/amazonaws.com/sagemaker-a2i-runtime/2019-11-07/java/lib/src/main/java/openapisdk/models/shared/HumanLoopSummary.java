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
 * HumanLoopSummary
 * Summary information about the human loop.
**/
public class HumanLoopSummary {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("CreationTime")
    public OffsetDateTime creationTime;
    public HumanLoopSummary withCreationTime(OffsetDateTime creationTime) {
        this.creationTime = creationTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FailureReason")
    public String failureReason;
    public HumanLoopSummary withFailureReason(String failureReason) {
        this.failureReason = failureReason;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FlowDefinitionArn")
    public String flowDefinitionArn;
    public HumanLoopSummary withFlowDefinitionArn(String flowDefinitionArn) {
        this.flowDefinitionArn = flowDefinitionArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("HumanLoopName")
    public String humanLoopName;
    public HumanLoopSummary withHumanLoopName(String humanLoopName) {
        this.humanLoopName = humanLoopName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("HumanLoopStatus")
    public HumanLoopStatusEnum humanLoopStatus;
    public HumanLoopSummary withHumanLoopStatus(HumanLoopStatusEnum humanLoopStatus) {
        this.humanLoopStatus = humanLoopStatus;
        return this;
    }
}