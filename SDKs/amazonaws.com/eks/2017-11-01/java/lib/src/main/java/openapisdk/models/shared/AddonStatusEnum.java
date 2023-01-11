package openapisdk.models.shared;


public enum AddonStatusEnum {
    CREATING("CREATING"),
    ACTIVE("ACTIVE"),
    CREATE_FAILED("CREATE_FAILED"),
    UPDATING("UPDATING"),
    DELETING("DELETING"),
    DELETE_FAILED("DELETE_FAILED"),
    DEGRADED("DEGRADED");

    public final String value;

    private AddonStatusEnum(String value) {
        this.value = value;
    }
}
