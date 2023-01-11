package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Subscriber
 * <p>The subscriber to a budget notification. The subscriber consists of a subscription type and either an Amazon SNS topic or an email address.</p> <p>For example, an email subscriber would have the following parameters:</p> <ul> <li> <p>A <code>subscriptionType</code> of <code>EMAIL</code> </p> </li> <li> <p>An <code>address</code> of <code>example@example.com</code> </p> </li> </ul>
**/
public class Subscriber {
    @JsonProperty("Address")
    public String address;
    public Subscriber withAddress(String address) {
        this.address = address;
        return this;
    }
    @JsonProperty("SubscriptionType")
    public SubscriptionTypeEnum subscriptionType;
    public Subscriber withSubscriptionType(SubscriptionTypeEnum subscriptionType) {
        this.subscriptionType = subscriptionType;
        return this;
    }
}