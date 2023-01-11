package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteCustomRoutingListenerRequest {
    @JsonProperty("ListenerArn")
    public String listenerArn;
    public DeleteCustomRoutingListenerRequest withListenerArn(String listenerArn) {
        this.listenerArn = listenerArn;
        return this;
    }
}