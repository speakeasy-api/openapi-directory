package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DeleteRegistry401ApplicationJson {
    @JsonProperty("id")
    public String id;
    public DeleteRegistry401ApplicationJson withId(String id) {
        this.id = id;
        return this;
    }
    @JsonProperty("message")
    public String message;
    public DeleteRegistry401ApplicationJson withMessage(String message) {
        this.message = message;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("request_id")
    public String requestId;
    public DeleteRegistry401ApplicationJson withRequestId(String requestId) {
        this.requestId = requestId;
        return this;
    }
}