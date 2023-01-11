package openapisdk.models.shared;


public enum DatastoreStatusEnum {
    CREATING("CREATING"),
    ACTIVE("ACTIVE"),
    DELETING("DELETING");

    public final String value;

    private DatastoreStatusEnum(String value) {
        this.value = value;
    }
}
