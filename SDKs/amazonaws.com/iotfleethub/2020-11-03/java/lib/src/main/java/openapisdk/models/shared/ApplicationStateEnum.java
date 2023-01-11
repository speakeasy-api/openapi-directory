package openapisdk.models.shared;


public enum ApplicationStateEnum {
    CREATING("CREATING"),
    DELETING("DELETING"),
    ACTIVE("ACTIVE"),
    CREATE_FAILED("CREATE_FAILED"),
    DELETE_FAILED("DELETE_FAILED");

    public final String value;

    private ApplicationStateEnum(String value) {
        this.value = value;
    }
}
