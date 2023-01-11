package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * AppPkgNotificationLinks
 * Links to resources related to this resource.
**/
public class AppPkgNotificationLinks {
    @JsonProperty("subscription")
    public LinkType subscription;
    public AppPkgNotificationLinks withSubscription(LinkType subscription) {
        this.subscription = subscription;
        return this;
    }
}