package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateListenerResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Listener")
    public Listener listener;
    public UpdateListenerResponse withListener(Listener listener) {
        this.listener = listener;
        return this;
    }
}