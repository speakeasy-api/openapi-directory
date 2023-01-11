package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SalesTaxJurisdiction
 * A unique ID for a sales tax jurisdiction.
**/
public class SalesTaxJurisdiction {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("salesTaxJurisdictionId")
    public String salesTaxJurisdictionId;
    public SalesTaxJurisdiction withSalesTaxJurisdictionId(String salesTaxJurisdictionId) {
        this.salesTaxJurisdictionId = salesTaxJurisdictionId;
        return this;
    }
}