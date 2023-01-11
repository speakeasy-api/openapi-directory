package openapisdk.models.shared;


public enum StreamingSessionStateEnum {
    CREATE_IN_PROGRESS("CREATE_IN_PROGRESS"),
    DELETE_IN_PROGRESS("DELETE_IN_PROGRESS"),
    READY("READY"),
    DELETED("DELETED"),
    CREATE_FAILED("CREATE_FAILED"),
    DELETE_FAILED("DELETE_FAILED");

    public final String value;

    private StreamingSessionStateEnum(String value) {
        this.value = value;
    }
}
