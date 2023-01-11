package openapisdk.models.shared;


public enum ReplicationRunStateEnum {
    PENDING("PENDING"),
    MISSED("MISSED"),
    ACTIVE("ACTIVE"),
    FAILED("FAILED"),
    COMPLETED("COMPLETED"),
    DELETING("DELETING"),
    DELETED("DELETED");

    public final String value;

    private ReplicationRunStateEnum(String value) {
        this.value = value;
    }
}
