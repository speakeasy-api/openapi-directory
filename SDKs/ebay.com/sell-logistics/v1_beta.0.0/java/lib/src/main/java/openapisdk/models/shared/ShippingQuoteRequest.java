package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ShippingQuoteRequest
 * This complex type defines the request body for createShippingQuote. Sellers request a quote for a shipment by defining the &quot;To&quot; and &quot;From&quot; addresses for the package, plus the package's size. Carriers respond by offering up a &quot;rate&quot; for the service of theirs that best fits seller's needs.
**/
public class ShippingQuoteRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("orders")
    public Order[] orders;
    public ShippingQuoteRequest withOrders(Order[] orders) {
        this.orders = orders;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("packageSpecification")
    public PackageSpecification packageSpecification;
    public ShippingQuoteRequest withPackageSpecification(PackageSpecification packageSpecification) {
        this.packageSpecification = packageSpecification;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shipFrom")
    public Contact shipFrom;
    public ShippingQuoteRequest withShipFrom(Contact shipFrom) {
        this.shipFrom = shipFrom;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shipTo")
    public Contact shipTo;
    public ShippingQuoteRequest withShipTo(Contact shipTo) {
        this.shipTo = shipTo;
        return this;
    }
}