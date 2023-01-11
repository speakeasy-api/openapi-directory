package openapisdk.models.shared;


public enum InstanceStatusEnum {
    PENDING("PENDING"),
    ACTIVE("ACTIVE"),
    TERMINATING("TERMINATING");

    public final String value;

    private InstanceStatusEnum(String value) {
        this.value = value;
    }
}
