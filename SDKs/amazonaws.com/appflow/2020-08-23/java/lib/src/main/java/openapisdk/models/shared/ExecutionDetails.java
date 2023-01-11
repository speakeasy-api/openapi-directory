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
 * ExecutionDetails
 *  Describes the details of the flow run, including the timestamp, status, and message. 
**/
public class ExecutionDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mostRecentExecutionMessage")
    public String mostRecentExecutionMessage;
    public ExecutionDetails withMostRecentExecutionMessage(String mostRecentExecutionMessage) {
        this.mostRecentExecutionMessage = mostRecentExecutionMessage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mostRecentExecutionStatus")
    public ExecutionStatusEnum mostRecentExecutionStatus;
    public ExecutionDetails withMostRecentExecutionStatus(ExecutionStatusEnum mostRecentExecutionStatus) {
        this.mostRecentExecutionStatus = mostRecentExecutionStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("mostRecentExecutionTime")
    public OffsetDateTime mostRecentExecutionTime;
    public ExecutionDetails withMostRecentExecutionTime(OffsetDateTime mostRecentExecutionTime) {
        this.mostRecentExecutionTime = mostRecentExecutionTime;
        return this;
    }
}