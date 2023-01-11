package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SalesTax
 * The applicable sales tax rate, as a percentage of the sale amount, for a given country and sales tax jurisdiction within that country.
**/
public class SalesTax {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("countryCode")
    public String countryCode;
    public SalesTax withCountryCode(String countryCode) {
        this.countryCode = countryCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("salesTaxJurisdictionId")
    public String salesTaxJurisdictionId;
    public SalesTax withSalesTaxJurisdictionId(String salesTaxJurisdictionId) {
        this.salesTaxJurisdictionId = salesTaxJurisdictionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("salesTaxPercentage")
    public String salesTaxPercentage;
    public SalesTax withSalesTaxPercentage(String salesTaxPercentage) {
        this.salesTaxPercentage = salesTaxPercentage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shippingAndHandlingTaxed")
    public Boolean shippingAndHandlingTaxed;
    public SalesTax withShippingAndHandlingTaxed(Boolean shippingAndHandlingTaxed) {
        this.shippingAndHandlingTaxed = shippingAndHandlingTaxed;
        return this;
    }
}