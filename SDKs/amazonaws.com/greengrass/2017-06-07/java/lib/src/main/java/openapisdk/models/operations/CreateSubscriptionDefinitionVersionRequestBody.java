package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateSubscriptionDefinitionVersionRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Subscriptions")
    public openapisdk.models.shared.Subscription[] subscriptions;
    public CreateSubscriptionDefinitionVersionRequestBody withSubscriptions(openapisdk.models.shared.Subscription[] subscriptions) {
        this.subscriptions = subscriptions;
        return this;
    }
}