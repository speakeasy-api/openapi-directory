package openapisdk.models.shared;


public enum NodegroupStatusEnum {
    CREATING("CREATING"),
    ACTIVE("ACTIVE"),
    UPDATING("UPDATING"),
    DELETING("DELETING"),
    CREATE_FAILED("CREATE_FAILED"),
    DELETE_FAILED("DELETE_FAILED"),
    DEGRADED("DEGRADED");

    public final String value;

    private NodegroupStatusEnum(String value) {
        this.value = value;
    }
}
