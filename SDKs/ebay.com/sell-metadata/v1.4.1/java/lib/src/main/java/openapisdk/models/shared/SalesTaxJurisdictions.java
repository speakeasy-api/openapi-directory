package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SalesTaxJurisdictions
 * This complex type contains a list of sales tax jurisdictions.
**/
public class SalesTaxJurisdictions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("salesTaxJurisdictions")
    public SalesTaxJurisdiction[] salesTaxJurisdictions;
    public SalesTaxJurisdictions withSalesTaxJurisdictions(SalesTaxJurisdiction[] salesTaxJurisdictions) {
        this.salesTaxJurisdictions = salesTaxJurisdictions;
        return this;
    }
}