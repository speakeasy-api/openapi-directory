package openapisdk.models.shared;


public enum OperationTypeEnum {
    START_DEPLOYMENT("START_DEPLOYMENT"),
    CREATE_SERVICE("CREATE_SERVICE"),
    PAUSE_SERVICE("PAUSE_SERVICE"),
    RESUME_SERVICE("RESUME_SERVICE"),
    DELETE_SERVICE("DELETE_SERVICE");

    public final String value;

    private OperationTypeEnum(String value) {
        this.value = value;
    }
}
