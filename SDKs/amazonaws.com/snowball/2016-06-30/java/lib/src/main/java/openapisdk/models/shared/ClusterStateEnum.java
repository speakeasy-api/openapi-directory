package openapisdk.models.shared;


public enum ClusterStateEnum {
    AWAITING_QUORUM("AwaitingQuorum"),
    PENDING("Pending"),
    IN_USE("InUse"),
    COMPLETE("Complete"),
    CANCELLED("Cancelled");

    public final String value;

    private ClusterStateEnum(String value) {
        this.value = value;
    }
}
