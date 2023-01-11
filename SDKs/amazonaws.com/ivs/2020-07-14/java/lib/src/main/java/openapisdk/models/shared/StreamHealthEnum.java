package openapisdk.models.shared;


public enum StreamHealthEnum {
    HEALTHY("HEALTHY"),
    STARVING("STARVING"),
    UNKNOWN("UNKNOWN");

    public final String value;

    private StreamHealthEnum(String value) {
        this.value = value;
    }
}
