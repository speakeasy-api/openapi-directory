package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribeListenerRequest {
    @JsonProperty("ListenerArn")
    public String listenerArn;
    public DescribeListenerRequest withListenerArn(String listenerArn) {
        this.listenerArn = listenerArn;
        return this;
    }
}