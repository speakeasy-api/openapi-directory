package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteListenerRequest {
    @JsonProperty("ListenerArn")
    public String listenerArn;
    public DeleteListenerRequest withListenerArn(String listenerArn) {
        this.listenerArn = listenerArn;
        return this;
    }
}