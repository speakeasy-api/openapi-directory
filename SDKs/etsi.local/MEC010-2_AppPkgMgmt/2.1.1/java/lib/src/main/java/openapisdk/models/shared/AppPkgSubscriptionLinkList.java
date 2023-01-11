package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * AppPkgSubscriptionLinkList
 * 'The data type represents a subscription link list of notification on application package management'
**/
public class AppPkgSubscriptionLinkList {
    @JsonProperty("_links")
    public AppPkgSubscriptionLinkListLinks links;
    public AppPkgSubscriptionLinkList withLinks(AppPkgSubscriptionLinkListLinks links) {
        this.links = links;
        return this;
    }
}