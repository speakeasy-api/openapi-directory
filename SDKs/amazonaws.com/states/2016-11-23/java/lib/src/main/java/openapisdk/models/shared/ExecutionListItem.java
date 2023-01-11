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
 * ExecutionListItem
 * Contains details about an execution.
**/
public class ExecutionListItem {
    @JsonProperty("executionArn")
    public String executionArn;
    public ExecutionListItem withExecutionArn(String executionArn) {
        this.executionArn = executionArn;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public ExecutionListItem withName(String name) {
        this.name = name;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("startDate")
    public OffsetDateTime startDate;
    public ExecutionListItem withStartDate(OffsetDateTime startDate) {
        this.startDate = startDate;
        return this;
    }
    @JsonProperty("stateMachineArn")
    public String stateMachineArn;
    public ExecutionListItem withStateMachineArn(String stateMachineArn) {
        this.stateMachineArn = stateMachineArn;
        return this;
    }
    @JsonProperty("status")
    public ExecutionStatusEnum status;
    public ExecutionListItem withStatus(ExecutionStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("stopDate")
    public OffsetDateTime stopDate;
    public ExecutionListItem withStopDate(OffsetDateTime stopDate) {
        this.stopDate = stopDate;
        return this;
    }
}