package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribeCustomRoutingListenerRequest {
    @JsonProperty("ListenerArn")
    public String listenerArn;
    public DescribeCustomRoutingListenerRequest withListenerArn(String listenerArn) {
        this.listenerArn = listenerArn;
        return this;
    }
}