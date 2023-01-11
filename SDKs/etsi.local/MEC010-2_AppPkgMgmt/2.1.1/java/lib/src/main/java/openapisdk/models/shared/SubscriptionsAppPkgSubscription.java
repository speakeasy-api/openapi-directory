package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * SubscriptionsAppPkgSubscription
 * 'The data type represents the input parameters of "subscription operation" to notification of application package management for the onboarding, or operational state change of application package.'
**/
public class SubscriptionsAppPkgSubscription {
    @JsonProperty("href")
    public String href;
    public SubscriptionsAppPkgSubscription withHref(String href) {
        this.href = href;
        return this;
    }
    @JsonProperty("subsctiptionType")
    public SubsctiptionTypeAppPkgEnum subsctiptionType;
    public SubscriptionsAppPkgSubscription withSubsctiptionType(SubsctiptionTypeAppPkgEnum subsctiptionType) {
        this.subsctiptionType = subsctiptionType;
        return this;
    }
}