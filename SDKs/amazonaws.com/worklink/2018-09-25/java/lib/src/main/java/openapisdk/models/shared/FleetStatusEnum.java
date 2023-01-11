package openapisdk.models.shared;


public enum FleetStatusEnum {
    CREATING("CREATING"),
    ACTIVE("ACTIVE"),
    DELETING("DELETING"),
    DELETED("DELETED"),
    FAILED_TO_CREATE("FAILED_TO_CREATE"),
    FAILED_TO_DELETE("FAILED_TO_DELETE");

    public final String value;

    private FleetStatusEnum(String value) {
        this.value = value;
    }
}
