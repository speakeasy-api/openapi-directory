package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Onev211ClicksGetResponses401ContentApplication1jsonSchema {
    @JsonProperty("id")
    public String id;
    public Onev211ClicksGetResponses401ContentApplication1jsonSchema withId(String id) {
        this.id = id;
        return this;
    }
    @JsonProperty("message")
    public String message;
    public Onev211ClicksGetResponses401ContentApplication1jsonSchema withMessage(String message) {
        this.message = message;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("request_id")
    public String requestId;
    public Onev211ClicksGetResponses401ContentApplication1jsonSchema withRequestId(String requestId) {
        this.requestId = requestId;
        return this;
    }
}