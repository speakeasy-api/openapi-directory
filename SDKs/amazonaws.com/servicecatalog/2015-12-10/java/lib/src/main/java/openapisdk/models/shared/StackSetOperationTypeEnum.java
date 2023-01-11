package openapisdk.models.shared;


public enum StackSetOperationTypeEnum {
    CREATE("CREATE"),
    UPDATE("UPDATE"),
    DELETE("DELETE");

    public final String value;

    private StackSetOperationTypeEnum(String value) {
        this.value = value;
    }
}
