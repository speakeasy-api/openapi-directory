package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TaxIdentifier
 * This type is used by the taxIdentifier container that is returned in getOrder. The taxIdentifier container consists of taxpayer identification information for buyers from Italy, Spain, or Guatemala. It is currently only returned for orders occurring on the eBay Italy or eBay Spain marketplaces. Note: Currently, the taxIdentifier container is only returned in getOrder and not in getOrders. So, if a seller wanted to view a buyer's tax information for a particular order returned in getOrders, that seller would need to use the orderId value for that particular order, and then run a getOrder call against that order ID.
**/
public class TaxIdentifier {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("issuingCountry")
    public String issuingCountry;
    public TaxIdentifier withIssuingCountry(String issuingCountry) {
        this.issuingCountry = issuingCountry;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taxIdentifierType")
    public String taxIdentifierType;
    public TaxIdentifier withTaxIdentifierType(String taxIdentifierType) {
        this.taxIdentifierType = taxIdentifierType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taxpayerId")
    public String taxpayerId;
    public TaxIdentifier withTaxpayerId(String taxpayerId) {
        this.taxpayerId = taxpayerId;
        return this;
    }
}