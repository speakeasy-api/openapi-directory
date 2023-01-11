package openapisdk.models.shared;


public enum ConformancePackStateEnum {
    CREATE_IN_PROGRESS("CREATE_IN_PROGRESS"),
    CREATE_COMPLETE("CREATE_COMPLETE"),
    CREATE_FAILED("CREATE_FAILED"),
    DELETE_IN_PROGRESS("DELETE_IN_PROGRESS"),
    DELETE_FAILED("DELETE_FAILED");

    public final String value;

    private ConformancePackStateEnum(String value) {
        this.value = value;
    }
}
