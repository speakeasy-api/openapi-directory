package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateListenerResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Listener")
    public Listener listener;
    public CreateListenerResponse withListener(Listener listener) {
        this.listener = listener;
        return this;
    }
}