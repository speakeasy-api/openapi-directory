package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateSubscriptionDefinitionRequestBodyInitialVersion
 * Information about a subscription definition version.
**/
public class CreateSubscriptionDefinitionRequestBodyInitialVersion {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Subscriptions")
    public openapisdk.models.shared.Subscription[] subscriptions;
    public CreateSubscriptionDefinitionRequestBodyInitialVersion withSubscriptions(openapisdk.models.shared.Subscription[] subscriptions) {
        this.subscriptions = subscriptions;
        return this;
    }
}