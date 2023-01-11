package openapisdk.models.shared;


public enum CompatibilityEnum {
    NONE("NONE"),
    DISABLED("DISABLED"),
    BACKWARD("BACKWARD"),
    BACKWARD_ALL("BACKWARD_ALL"),
    FORWARD("FORWARD"),
    FORWARD_ALL("FORWARD_ALL"),
    FULL("FULL"),
    FULL_ALL("FULL_ALL");

    public final String value;

    private CompatibilityEnum(String value) {
        this.value = value;
    }
}
