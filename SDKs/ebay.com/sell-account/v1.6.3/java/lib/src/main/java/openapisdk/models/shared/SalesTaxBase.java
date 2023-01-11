package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SalesTaxBase
 * A container that describes the how the sales tax rate is calculated.
**/
public class SalesTaxBase {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("salesTaxPercentage")
    public String salesTaxPercentage;
    public SalesTaxBase withSalesTaxPercentage(String salesTaxPercentage) {
        this.salesTaxPercentage = salesTaxPercentage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shippingAndHandlingTaxed")
    public Boolean shippingAndHandlingTaxed;
    public SalesTaxBase withShippingAndHandlingTaxed(Boolean shippingAndHandlingTaxed) {
        this.shippingAndHandlingTaxed = shippingAndHandlingTaxed;
        return this;
    }
}