package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ReposCreateDispatchEventRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("client_payload")
    public java.util.Map<String, Object> clientPayload;
    public ReposCreateDispatchEventRequestBody withClientPayload(java.util.Map<String, Object> clientPayload) {
        this.clientPayload = clientPayload;
        return this;
    }
    @JsonProperty("event_type")
    public String eventType;
    public ReposCreateDispatchEventRequestBody withEventType(String eventType) {
        this.eventType = eventType;
        return this;
    }
}