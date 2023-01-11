package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UnprocessedTraceSegment
 * Information about a segment that failed processing.
**/
public class UnprocessedTraceSegment {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ErrorCode")
    public String errorCode;
    public UnprocessedTraceSegment withErrorCode(String errorCode) {
        this.errorCode = errorCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Id")
    public String id;
    public UnprocessedTraceSegment withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Message")
    public String message;
    public UnprocessedTraceSegment withMessage(String message) {
        this.message = message;
        return this;
    }
}