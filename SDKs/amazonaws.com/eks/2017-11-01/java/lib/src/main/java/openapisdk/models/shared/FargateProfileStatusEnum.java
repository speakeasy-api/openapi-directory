package openapisdk.models.shared;


public enum FargateProfileStatusEnum {
    CREATING("CREATING"),
    ACTIVE("ACTIVE"),
    DELETING("DELETING"),
    CREATE_FAILED("CREATE_FAILED"),
    DELETE_FAILED("DELETE_FAILED");

    public final String value;

    private FargateProfileStatusEnum(String value) {
        this.value = value;
    }
}
