package openapisdk.models.shared;


public enum OperationTypeEnum {
    CREATE_NAMESPACE("CREATE_NAMESPACE"),
    DELETE_NAMESPACE("DELETE_NAMESPACE"),
    UPDATE_NAMESPACE("UPDATE_NAMESPACE"),
    UPDATE_SERVICE("UPDATE_SERVICE"),
    REGISTER_INSTANCE("REGISTER_INSTANCE"),
    DEREGISTER_INSTANCE("DEREGISTER_INSTANCE");

    public final String value;

    private OperationTypeEnum(String value) {
        this.value = value;
    }
}
