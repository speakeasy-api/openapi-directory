package openapisdk.models.shared;


public enum FleetTypeEnum {
    ON_DEMAND("ON_DEMAND"),
    SPOT("SPOT");

    public final String value;

    private FleetTypeEnum(String value) {
        this.value = value;
    }
}
