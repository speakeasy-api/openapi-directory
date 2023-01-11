package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeListenerResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Listener")
    public Listener listener;
    public DescribeListenerResponse withListener(Listener listener) {
        this.listener = listener;
        return this;
    }
}