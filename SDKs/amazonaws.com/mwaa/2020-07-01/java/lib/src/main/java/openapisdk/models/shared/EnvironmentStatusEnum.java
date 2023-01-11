package openapisdk.models.shared;


public enum EnvironmentStatusEnum {
    CREATING("CREATING"),
    CREATE_FAILED("CREATE_FAILED"),
    AVAILABLE("AVAILABLE"),
    UPDATING("UPDATING"),
    DELETING("DELETING"),
    DELETED("DELETED"),
    UNAVAILABLE("UNAVAILABLE"),
    UPDATE_FAILED("UPDATE_FAILED");

    public final String value;

    private EnvironmentStatusEnum(String value) {
        this.value = value;
    }
}
