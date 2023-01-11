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
 * QueryExecutionStatus
 * The completion date, current state, submission time, and state change reason (if applicable) for the query execution.
**/
public class QueryExecutionStatus {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("CompletionDateTime")
    public OffsetDateTime completionDateTime;
    public QueryExecutionStatus withCompletionDateTime(OffsetDateTime completionDateTime) {
        this.completionDateTime = completionDateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("State")
    public QueryExecutionStateEnum state;
    public QueryExecutionStatus withState(QueryExecutionStateEnum state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StateChangeReason")
    public String stateChangeReason;
    public QueryExecutionStatus withStateChangeReason(String stateChangeReason) {
        this.stateChangeReason = stateChangeReason;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("SubmissionDateTime")
    public OffsetDateTime submissionDateTime;
    public QueryExecutionStatus withSubmissionDateTime(OffsetDateTime submissionDateTime) {
        this.submissionDateTime = submissionDateTime;
        return this;
    }
}