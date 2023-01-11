package openapisdk.models.shared;


public enum DatastoreStatusEnum {
    CREATING("CREATING"),
    ACTIVE("ACTIVE"),
    DELETING("DELETING"),
    DELETED("DELETED");

    public final String value;

    private DatastoreStatusEnum(String value) {
        this.value = value;
    }
}
