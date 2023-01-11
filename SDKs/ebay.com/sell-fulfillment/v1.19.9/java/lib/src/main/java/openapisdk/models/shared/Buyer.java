package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Buyer
 * This type contains information about the order's buyer.
**/
public class Buyer {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taxAddress")
    public TaxAddress taxAddress;
    public Buyer withTaxAddress(TaxAddress taxAddress) {
        this.taxAddress = taxAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taxIdentifier")
    public TaxIdentifier taxIdentifier;
    public Buyer withTaxIdentifier(TaxIdentifier taxIdentifier) {
        this.taxIdentifier = taxIdentifier;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("username")
    public String username;
    public Buyer withUsername(String username) {
        this.username = username;
        return this;
    }
}