package openapisdk.models.shared;


public enum ResourceShareStatusEnum {
    PENDING("PENDING"),
    ACTIVE("ACTIVE"),
    FAILED("FAILED"),
    DELETING("DELETING"),
    DELETED("DELETED");

    public final String value;

    private ResourceShareStatusEnum(String value) {
        this.value = value;
    }
}
