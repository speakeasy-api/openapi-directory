package openapisdk.models.shared;


public enum StreamingSessionStreamStateEnum {
    READY("READY"),
    CREATE_IN_PROGRESS("CREATE_IN_PROGRESS"),
    DELETE_IN_PROGRESS("DELETE_IN_PROGRESS"),
    DELETED("DELETED"),
    CREATE_FAILED("CREATE_FAILED"),
    DELETE_FAILED("DELETE_FAILED");

    public final String value;

    private StreamingSessionStreamStateEnum(String value) {
        this.value = value;
    }
}
