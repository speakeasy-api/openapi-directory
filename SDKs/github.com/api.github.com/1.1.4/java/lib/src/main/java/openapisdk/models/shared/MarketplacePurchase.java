package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MarketplacePurchase
 * Marketplace Purchase
**/
public class MarketplacePurchase {
    @JsonProperty("id")
    public Long id;
    public MarketplacePurchase withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("login")
    public String login;
    public MarketplacePurchase withLogin(String login) {
        this.login = login;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("marketplace_pending_change")
    public MarketplacePurchaseMarketplacePendingChange marketplacePendingChange;
    public MarketplacePurchase withMarketplacePendingChange(MarketplacePurchaseMarketplacePendingChange marketplacePendingChange) {
        this.marketplacePendingChange = marketplacePendingChange;
        return this;
    }
    @JsonProperty("marketplace_purchase")
    public MarketplacePurchaseMarketplacePurchase marketplacePurchase;
    public MarketplacePurchase withMarketplacePurchase(MarketplacePurchaseMarketplacePurchase marketplacePurchase) {
        this.marketplacePurchase = marketplacePurchase;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("organization_billing_email")
    public String organizationBillingEmail;
    public MarketplacePurchase withOrganizationBillingEmail(String organizationBillingEmail) {
        this.organizationBillingEmail = organizationBillingEmail;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public MarketplacePurchase withType(String type) {
        this.type = type;
        return this;
    }
    @JsonProperty("url")
    public String url;
    public MarketplacePurchase withUrl(String url) {
        this.url = url;
        return this;
    }
}