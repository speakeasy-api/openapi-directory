package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SubscriptionDefinitionVersion
 * Information about a subscription definition version.
**/
public class SubscriptionDefinitionVersion {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Subscriptions")
    public Subscription[] subscriptions;
    public SubscriptionDefinitionVersion withSubscriptions(Subscription[] subscriptions) {
        this.subscriptions = subscriptions;
        return this;
    }
}