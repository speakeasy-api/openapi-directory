package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ShippingQuote
 * This complex type describes a &quot;shipping quote,&quot; which contains the parameters for a package shipment. The shipping quote contains a list of &quot;live quotes&quot; or rates for the shipment. Rates are offerd by a carrier for a particular service, of set of services, for shipping the package. Included in the shipping quote are the package specifications, the shipment's origin and destination addresses, and the shipping parameters specified by the seller. Use the rateId value to select the specific service you want when you create a shipment by calling createFromShippingQuote.
**/
public class ShippingQuote {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creationDate")
    public String creationDate;
    public ShippingQuote withCreationDate(String creationDate) {
        this.creationDate = creationDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("expirationDate")
    public String expirationDate;
    public ShippingQuote withExpirationDate(String expirationDate) {
        this.expirationDate = expirationDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("orders")
    public Order[] orders;
    public ShippingQuote withOrders(Order[] orders) {
        this.orders = orders;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("packageSpecification")
    public PackageSpecification packageSpecification;
    public ShippingQuote withPackageSpecification(PackageSpecification packageSpecification) {
        this.packageSpecification = packageSpecification;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rates")
    public Rate[] rates;
    public ShippingQuote withRates(Rate[] rates) {
        this.rates = rates;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shipFrom")
    public Contact shipFrom;
    public ShippingQuote withShipFrom(Contact shipFrom) {
        this.shipFrom = shipFrom;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shipTo")
    public Contact shipTo;
    public ShippingQuote withShipTo(Contact shipTo) {
        this.shipTo = shipTo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shippingQuoteId")
    public String shippingQuoteId;
    public ShippingQuote withShippingQuoteId(String shippingQuoteId) {
        this.shippingQuoteId = shippingQuoteId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("warnings")
    public Error[] warnings;
    public ShippingQuote withWarnings(Error[] warnings) {
        this.warnings = warnings;
        return this;
    }
}