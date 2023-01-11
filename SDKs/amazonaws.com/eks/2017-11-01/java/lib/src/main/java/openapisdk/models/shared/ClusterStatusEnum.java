package openapisdk.models.shared;


public enum ClusterStatusEnum {
    CREATING("CREATING"),
    ACTIVE("ACTIVE"),
    DELETING("DELETING"),
    FAILED("FAILED"),
    UPDATING("UPDATING"),
    PENDING("PENDING");

    public final String value;

    private ClusterStatusEnum(String value) {
        this.value = value;
    }
}
