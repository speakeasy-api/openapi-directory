package openapisdk.models.shared;


public enum StreamingImageStateEnum {
    CREATE_IN_PROGRESS("CREATE_IN_PROGRESS"),
    READY("READY"),
    DELETE_IN_PROGRESS("DELETE_IN_PROGRESS"),
    DELETED("DELETED"),
    UPDATE_IN_PROGRESS("UPDATE_IN_PROGRESS"),
    UPDATE_FAILED("UPDATE_FAILED"),
    CREATE_FAILED("CREATE_FAILED"),
    DELETE_FAILED("DELETE_FAILED");

    public final String value;

    private StreamingImageStateEnum(String value) {
        this.value = value;
    }
}
