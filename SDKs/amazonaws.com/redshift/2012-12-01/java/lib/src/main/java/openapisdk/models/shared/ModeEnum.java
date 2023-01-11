package openapisdk.models.shared;


public enum ModeEnum {
    STANDARD("standard"),
    HIGH_PERFORMANCE("high-performance");

    public final String value;

    private ModeEnum(String value) {
        this.value = value;
    }
}
