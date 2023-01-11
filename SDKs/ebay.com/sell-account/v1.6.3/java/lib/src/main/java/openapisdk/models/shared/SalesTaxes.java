package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SalesTaxes
 * A list of sales tax tables.
**/
public class SalesTaxes {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("salesTaxes")
    public SalesTax[] salesTaxes;
    public SalesTaxes withSalesTaxes(SalesTax[] salesTaxes) {
        this.salesTaxes = salesTaxes;
        return this;
    }
}