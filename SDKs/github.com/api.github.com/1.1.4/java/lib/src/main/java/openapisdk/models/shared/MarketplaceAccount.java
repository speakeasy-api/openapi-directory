package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class MarketplaceAccount {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email")
    public String email;
    public MarketplaceAccount withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonProperty("id")
    public Long id;
    public MarketplaceAccount withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("login")
    public String login;
    public MarketplaceAccount withLogin(String login) {
        this.login = login;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("node_id")
    public String nodeId;
    public MarketplaceAccount withNodeId(String nodeId) {
        this.nodeId = nodeId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("organization_billing_email")
    public String organizationBillingEmail;
    public MarketplaceAccount withOrganizationBillingEmail(String organizationBillingEmail) {
        this.organizationBillingEmail = organizationBillingEmail;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public MarketplaceAccount withType(String type) {
        this.type = type;
        return this;
    }
    @JsonProperty("url")
    public String url;
    public MarketplaceAccount withUrl(String url) {
        this.url = url;
        return this;
    }
}