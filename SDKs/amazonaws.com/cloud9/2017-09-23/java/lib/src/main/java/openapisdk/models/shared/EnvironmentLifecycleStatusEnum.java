package openapisdk.models.shared;


public enum EnvironmentLifecycleStatusEnum {
    CREATING("CREATING"),
    CREATED("CREATED"),
    CREATE_FAILED("CREATE_FAILED"),
    DELETING("DELETING"),
    DELETE_FAILED("DELETE_FAILED");

    public final String value;

    private EnvironmentLifecycleStatusEnum(String value) {
        this.value = value;
    }
}
