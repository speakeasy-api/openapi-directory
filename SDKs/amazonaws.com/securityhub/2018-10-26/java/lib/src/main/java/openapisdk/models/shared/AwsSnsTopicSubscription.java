package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AwsSnsTopicSubscription
 * A wrapper type for the attributes of an Amazon SNS subscription.
**/
public class AwsSnsTopicSubscription {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Endpoint")
    public String endpoint;
    public AwsSnsTopicSubscription withEndpoint(String endpoint) {
        this.endpoint = endpoint;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Protocol")
    public String protocol;
    public AwsSnsTopicSubscription withProtocol(String protocol) {
        this.protocol = protocol;
        return this;
    }
}