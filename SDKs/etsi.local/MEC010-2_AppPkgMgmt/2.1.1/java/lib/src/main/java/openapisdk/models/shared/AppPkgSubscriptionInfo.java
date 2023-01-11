package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * AppPkgSubscriptionInfo
 * 'The data type represents a subscription to notification of application package management for the onboarding, or operational state change of application package'
**/
public class AppPkgSubscriptionInfo {
    @JsonProperty("_links")
    public AppPkgSubscriptionInfoLinks links;
    public AppPkgSubscriptionInfo withLinks(AppPkgSubscriptionInfoLinks links) {
        this.links = links;
        return this;
    }
    @JsonProperty("callbackUri")
    public String callbackUri;
    public AppPkgSubscriptionInfo withCallbackUri(String callbackUri) {
        this.callbackUri = callbackUri;
        return this;
    }
    @JsonProperty("id")
    public String id;
    public AppPkgSubscriptionInfo withId(String id) {
        this.id = id;
        return this;
    }
    @JsonProperty("subscriptionType")
    public AppPkgSubscriptionTypeEnum subscriptionType;
    public AppPkgSubscriptionInfo withSubscriptionType(AppPkgSubscriptionTypeEnum subscriptionType) {
        this.subscriptionType = subscriptionType;
        return this;
    }
}