package openapisdk.models.shared;


public enum CriticalityEnum {
    PREFERRED("PREFERRED"),
    REMOVED("REMOVED"),
    REQUIRED("REQUIRED");

    public final String value;

    private CriticalityEnum(String value) {
        this.value = value;
    }
}
