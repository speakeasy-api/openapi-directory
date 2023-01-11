package openapisdk.models.shared;


public enum PlatformStatusEnum {
    CREATING("Creating"),
    FAILED("Failed"),
    READY("Ready"),
    DELETING("Deleting"),
    DELETED("Deleted");

    public final String value;

    private PlatformStatusEnum(String value) {
        this.value = value;
    }
}
