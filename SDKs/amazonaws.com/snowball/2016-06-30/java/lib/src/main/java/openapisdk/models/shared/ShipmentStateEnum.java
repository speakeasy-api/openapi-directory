package openapisdk.models.shared;


public enum ShipmentStateEnum {
    RECEIVED("RECEIVED"),
    RETURNED("RETURNED");

    public final String value;

    private ShipmentStateEnum(String value) {
        this.value = value;
    }
}
