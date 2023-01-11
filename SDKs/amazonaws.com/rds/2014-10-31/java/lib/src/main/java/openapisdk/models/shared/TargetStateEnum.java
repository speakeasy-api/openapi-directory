package openapisdk.models.shared;


public enum TargetStateEnum {
    REGISTERING("REGISTERING"),
    AVAILABLE("AVAILABLE"),
    UNAVAILABLE("UNAVAILABLE");

    public final String value;

    private TargetStateEnum(String value) {
        this.value = value;
    }
}
