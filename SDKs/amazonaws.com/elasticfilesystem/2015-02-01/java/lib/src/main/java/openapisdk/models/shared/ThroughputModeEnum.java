package openapisdk.models.shared;


public enum ThroughputModeEnum {
    BURSTING("bursting"),
    PROVISIONED("provisioned");

    public final String value;

    private ThroughputModeEnum(String value) {
        this.value = value;
    }
}
