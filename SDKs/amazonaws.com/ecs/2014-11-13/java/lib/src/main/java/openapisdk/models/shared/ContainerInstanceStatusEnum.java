package openapisdk.models.shared;


public enum ContainerInstanceStatusEnum {
    ACTIVE("ACTIVE"),
    DRAINING("DRAINING"),
    REGISTERING("REGISTERING"),
    DEREGISTERING("DEREGISTERING"),
    REGISTRATION_FAILED("REGISTRATION_FAILED");

    public final String value;

    private ContainerInstanceStatusEnum(String value) {
        this.value = value;
    }
}
