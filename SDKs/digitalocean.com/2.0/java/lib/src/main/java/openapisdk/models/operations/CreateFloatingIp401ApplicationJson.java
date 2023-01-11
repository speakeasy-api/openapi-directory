package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateFloatingIp401ApplicationJson {
    @JsonProperty("id")
    public String id;
    public CreateFloatingIp401ApplicationJson withId(String id) {
        this.id = id;
        return this;
    }
    @JsonProperty("message")
    public String message;
    public CreateFloatingIp401ApplicationJson withMessage(String message) {
        this.message = message;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("request_id")
    public String requestId;
    public CreateFloatingIp401ApplicationJson withRequestId(String requestId) {
        this.requestId = requestId;
        return this;
    }
}