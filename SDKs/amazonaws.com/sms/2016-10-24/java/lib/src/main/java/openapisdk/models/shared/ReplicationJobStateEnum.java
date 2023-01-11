package openapisdk.models.shared;


public enum ReplicationJobStateEnum {
    PENDING("PENDING"),
    ACTIVE("ACTIVE"),
    FAILED("FAILED"),
    DELETING("DELETING"),
    DELETED("DELETED"),
    COMPLETED("COMPLETED"),
    PAUSED_ON_FAILURE("PAUSED_ON_FAILURE"),
    FAILING("FAILING");

    public final String value;

    private ReplicationJobStateEnum(String value) {
        this.value = value;
    }
}
