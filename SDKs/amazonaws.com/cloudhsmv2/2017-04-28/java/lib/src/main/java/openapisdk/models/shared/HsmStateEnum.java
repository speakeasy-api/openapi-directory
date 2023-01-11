package openapisdk.models.shared;


public enum HsmStateEnum {
    CREATE_IN_PROGRESS("CREATE_IN_PROGRESS"),
    ACTIVE("ACTIVE"),
    DEGRADED("DEGRADED"),
    DELETE_IN_PROGRESS("DELETE_IN_PROGRESS"),
    DELETED("DELETED");

    public final String value;

    private HsmStateEnum(String value) {
        this.value = value;
    }
}
