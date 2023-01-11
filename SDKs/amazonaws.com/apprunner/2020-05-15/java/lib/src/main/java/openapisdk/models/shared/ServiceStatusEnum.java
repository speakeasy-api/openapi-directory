package openapisdk.models.shared;


public enum ServiceStatusEnum {
    CREATE_FAILED("CREATE_FAILED"),
    RUNNING("RUNNING"),
    DELETED("DELETED"),
    DELETE_FAILED("DELETE_FAILED"),
    PAUSED("PAUSED"),
    OPERATION_IN_PROGRESS("OPERATION_IN_PROGRESS");

    public final String value;

    private ServiceStatusEnum(String value) {
        this.value = value;
    }
}
