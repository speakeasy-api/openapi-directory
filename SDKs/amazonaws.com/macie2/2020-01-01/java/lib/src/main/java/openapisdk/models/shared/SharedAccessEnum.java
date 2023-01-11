package openapisdk.models.shared;


public enum SharedAccessEnum {
    EXTERNAL("EXTERNAL"),
    INTERNAL("INTERNAL"),
    NOT_SHARED("NOT_SHARED"),
    UNKNOWN("UNKNOWN");

    public final String value;

    private SharedAccessEnum(String value) {
        this.value = value;
    }
}
