package openapisdk.models.shared;


public enum DomainControllerStatusEnum {
    CREATING("Creating"),
    ACTIVE("Active"),
    IMPAIRED("Impaired"),
    RESTORING("Restoring"),
    DELETING("Deleting"),
    DELETED("Deleted"),
    FAILED("Failed");

    public final String value;

    private DomainControllerStatusEnum(String value) {
        this.value = value;
    }
}
