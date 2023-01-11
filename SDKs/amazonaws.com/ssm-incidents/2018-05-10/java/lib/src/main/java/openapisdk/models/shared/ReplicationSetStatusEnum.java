package openapisdk.models.shared;


public enum ReplicationSetStatusEnum {
    ACTIVE("ACTIVE"),
    CREATING("CREATING"),
    UPDATING("UPDATING"),
    DELETING("DELETING"),
    FAILED("FAILED");

    public final String value;

    private ReplicationSetStatusEnum(String value) {
        this.value = value;
    }
}
