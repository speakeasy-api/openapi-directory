package openapisdk.models.shared;


public enum ClusterStateEnum {
    CREATE_IN_PROGRESS("CREATE_IN_PROGRESS"),
    UNINITIALIZED("UNINITIALIZED"),
    INITIALIZE_IN_PROGRESS("INITIALIZE_IN_PROGRESS"),
    INITIALIZED("INITIALIZED"),
    ACTIVE("ACTIVE"),
    UPDATE_IN_PROGRESS("UPDATE_IN_PROGRESS"),
    DELETE_IN_PROGRESS("DELETE_IN_PROGRESS"),
    DELETED("DELETED"),
    DEGRADED("DEGRADED");

    public final String value;

    private ClusterStateEnum(String value) {
        this.value = value;
    }
}
