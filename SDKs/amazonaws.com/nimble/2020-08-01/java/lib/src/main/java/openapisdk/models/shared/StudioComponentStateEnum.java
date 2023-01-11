package openapisdk.models.shared;


public enum StudioComponentStateEnum {
    CREATE_IN_PROGRESS("CREATE_IN_PROGRESS"),
    READY("READY"),
    UPDATE_IN_PROGRESS("UPDATE_IN_PROGRESS"),
    DELETE_IN_PROGRESS("DELETE_IN_PROGRESS"),
    DELETED("DELETED"),
    DELETE_FAILED("DELETE_FAILED"),
    CREATE_FAILED("CREATE_FAILED"),
    UPDATE_FAILED("UPDATE_FAILED");

    public final String value;

    private StudioComponentStateEnum(String value) {
        this.value = value;
    }
}
