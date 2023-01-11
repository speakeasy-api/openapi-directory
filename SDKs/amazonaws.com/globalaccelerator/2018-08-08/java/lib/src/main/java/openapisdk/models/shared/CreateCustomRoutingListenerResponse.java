package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateCustomRoutingListenerResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Listener")
    public CustomRoutingListener listener;
    public CreateCustomRoutingListenerResponse withListener(CustomRoutingListener listener) {
        this.listener = listener;
        return this;
    }
}