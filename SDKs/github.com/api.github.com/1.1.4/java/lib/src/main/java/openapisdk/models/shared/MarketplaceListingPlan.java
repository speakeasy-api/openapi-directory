package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * MarketplaceListingPlan
 * Marketplace Listing Plan
**/
public class MarketplaceListingPlan {
    @JsonProperty("accounts_url")
    public String accountsUrl;
    public MarketplaceListingPlan withAccountsUrl(String accountsUrl) {
        this.accountsUrl = accountsUrl;
        return this;
    }
    @JsonProperty("bullets")
    public String[] bullets;
    public MarketplaceListingPlan withBullets(String[] bullets) {
        this.bullets = bullets;
        return this;
    }
    @JsonProperty("description")
    public String description;
    public MarketplaceListingPlan withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("has_free_trial")
    public Boolean hasFreeTrial;
    public MarketplaceListingPlan withHasFreeTrial(Boolean hasFreeTrial) {
        this.hasFreeTrial = hasFreeTrial;
        return this;
    }
    @JsonProperty("id")
    public Long id;
    public MarketplaceListingPlan withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("monthly_price_in_cents")
    public Long monthlyPriceInCents;
    public MarketplaceListingPlan withMonthlyPriceInCents(Long monthlyPriceInCents) {
        this.monthlyPriceInCents = monthlyPriceInCents;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public MarketplaceListingPlan withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("number")
    public Long number;
    public MarketplaceListingPlan withNumber(Long number) {
        this.number = number;
        return this;
    }
    @JsonProperty("price_model")
    public String priceModel;
    public MarketplaceListingPlan withPriceModel(String priceModel) {
        this.priceModel = priceModel;
        return this;
    }
    @JsonProperty("state")
    public String state;
    public MarketplaceListingPlan withState(String state) {
        this.state = state;
        return this;
    }
    @JsonProperty("unit_name")
    public String unitName;
    public MarketplaceListingPlan withUnitName(String unitName) {
        this.unitName = unitName;
        return this;
    }
    @JsonProperty("url")
    public String url;
    public MarketplaceListingPlan withUrl(String url) {
        this.url = url;
        return this;
    }
    @JsonProperty("yearly_price_in_cents")
    public Long yearlyPriceInCents;
    public MarketplaceListingPlan withYearlyPriceInCents(Long yearlyPriceInCents) {
        this.yearlyPriceInCents = yearlyPriceInCents;
        return this;
    }
}