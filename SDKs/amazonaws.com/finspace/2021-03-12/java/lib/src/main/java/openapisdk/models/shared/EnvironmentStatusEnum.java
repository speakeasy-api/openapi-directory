package openapisdk.models.shared;


public enum EnvironmentStatusEnum {
    CREATE_REQUESTED("CREATE_REQUESTED"),
    CREATING("CREATING"),
    CREATED("CREATED"),
    DELETE_REQUESTED("DELETE_REQUESTED"),
    DELETING("DELETING"),
    DELETED("DELETED"),
    FAILED_CREATION("FAILED_CREATION"),
    RETRY_DELETION("RETRY_DELETION"),
    FAILED_DELETION("FAILED_DELETION"),
    SUSPENDED("SUSPENDED");

    public final String value;

    private EnvironmentStatusEnum(String value) {
        this.value = value;
    }
}
