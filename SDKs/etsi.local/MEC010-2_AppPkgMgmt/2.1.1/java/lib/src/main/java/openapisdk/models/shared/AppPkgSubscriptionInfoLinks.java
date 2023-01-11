package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * AppPkgSubscriptionInfoLinks
 * Links to resources related to this resource.
**/
public class AppPkgSubscriptionInfoLinks {
    @JsonProperty("self")
    public LinkType self;
    public AppPkgSubscriptionInfoLinks withSelf(LinkType self) {
        this.self = self;
        return this;
    }
}