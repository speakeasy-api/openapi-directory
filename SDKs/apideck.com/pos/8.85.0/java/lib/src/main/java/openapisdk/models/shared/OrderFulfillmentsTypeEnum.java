package openapisdk.models.shared;


public enum OrderFulfillmentsTypeEnum {
    PICKUP("pickup"),
    SHIPMENT("shipment");

    public final String value;

    private OrderFulfillmentsTypeEnum(String value) {
        this.value = value;
    }
}
