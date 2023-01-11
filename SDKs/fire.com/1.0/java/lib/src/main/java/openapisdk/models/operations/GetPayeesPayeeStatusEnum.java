package openapisdk.models.operations;


public enum GetPayeesPayeeStatusEnum {
    CREATED("CREATED"),
    LIVE("LIVE"),
    CLOSED("CLOSED"),
    ARCHIVED("ARCHIVED");

    public final String value;

    private GetPayeesPayeeStatusEnum(String value) {
        this.value = value;
    }
}
