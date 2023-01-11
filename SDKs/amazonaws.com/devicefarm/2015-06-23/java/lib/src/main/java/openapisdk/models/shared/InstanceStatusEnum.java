package openapisdk.models.shared;


public enum InstanceStatusEnum {
    IN_USE("IN_USE"),
    PREPARING("PREPARING"),
    AVAILABLE("AVAILABLE"),
    NOT_AVAILABLE("NOT_AVAILABLE");

    public final String value;

    private InstanceStatusEnum(String value) {
        this.value = value;
    }
}
