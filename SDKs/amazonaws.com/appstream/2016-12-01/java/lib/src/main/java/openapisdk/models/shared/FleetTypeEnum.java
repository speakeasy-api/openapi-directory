package openapisdk.models.shared;


public enum FleetTypeEnum {
    ALWAYS_ON("ALWAYS_ON"),
    ON_DEMAND("ON_DEMAND");

    public final String value;

    private FleetTypeEnum(String value) {
        this.value = value;
    }
}
