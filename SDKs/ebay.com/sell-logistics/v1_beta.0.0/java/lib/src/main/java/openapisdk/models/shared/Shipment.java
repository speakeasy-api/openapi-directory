package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Shipment
 * This complex type defines a shipment for a specific package (for example, a box or letter). Shipments are always linked to a purchased shipping label.
**/
public class Shipment {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cancellation")
    public ShipmentCancellation cancellation;
    public Shipment withCancellation(ShipmentCancellation cancellation) {
        this.cancellation = cancellation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creationDate")
    public String creationDate;
    public Shipment withCreationDate(String creationDate) {
        this.creationDate = creationDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labelCustomMessage")
    public String labelCustomMessage;
    public Shipment withLabelCustomMessage(String labelCustomMessage) {
        this.labelCustomMessage = labelCustomMessage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labelDownloadUrl")
    public String labelDownloadUrl;
    public Shipment withLabelDownloadUrl(String labelDownloadUrl) {
        this.labelDownloadUrl = labelDownloadUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labelSize")
    public String labelSize;
    public Shipment withLabelSize(String labelSize) {
        this.labelSize = labelSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("orders")
    public Order[] orders;
    public Shipment withOrders(Order[] orders) {
        this.orders = orders;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("packageSpecification")
    public PackageSpecification packageSpecification;
    public Shipment withPackageSpecification(PackageSpecification packageSpecification) {
        this.packageSpecification = packageSpecification;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rate")
    public PurchasedRate rate;
    public Shipment withRate(PurchasedRate rate) {
        this.rate = rate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("returnTo")
    public Contact returnTo;
    public Shipment withReturnTo(Contact returnTo) {
        this.returnTo = returnTo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shipFrom")
    public Contact shipFrom;
    public Shipment withShipFrom(Contact shipFrom) {
        this.shipFrom = shipFrom;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shipTo")
    public Contact shipTo;
    public Shipment withShipTo(Contact shipTo) {
        this.shipTo = shipTo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shipmentId")
    public String shipmentId;
    public Shipment withShipmentId(String shipmentId) {
        this.shipmentId = shipmentId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shipmentTrackingNumber")
    public String shipmentTrackingNumber;
    public Shipment withShipmentTrackingNumber(String shipmentTrackingNumber) {
        this.shipmentTrackingNumber = shipmentTrackingNumber;
        return this;
    }
}