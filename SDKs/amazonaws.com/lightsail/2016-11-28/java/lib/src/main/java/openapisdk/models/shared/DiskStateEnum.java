package openapisdk.models.shared;


public enum DiskStateEnum {
    PENDING("pending"),
    ERROR("error"),
    AVAILABLE("available"),
    IN_USE("in-use"),
    UNKNOWN("unknown");

    public final String value;

    private DiskStateEnum(String value) {
        this.value = value;
    }
}
