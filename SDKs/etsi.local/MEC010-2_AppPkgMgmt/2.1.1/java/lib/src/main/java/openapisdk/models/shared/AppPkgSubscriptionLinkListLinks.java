package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AppPkgSubscriptionLinkListLinks
 * Links to resources related to this resource.
**/
public class AppPkgSubscriptionLinkListLinks {
    @JsonProperty("self")
    public LinkType self;
    public AppPkgSubscriptionLinkListLinks withSelf(LinkType self) {
        this.self = self;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subscriptions")
    public SubscriptionsAppPkgSubscription[] subscriptions;
    public AppPkgSubscriptionLinkListLinks withSubscriptions(SubscriptionsAppPkgSubscription[] subscriptions) {
        this.subscriptions = subscriptions;
        return this;
    }
}