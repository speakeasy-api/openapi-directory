package openapisdk.models.operations;


public enum ListAllDroplets200ApplicationJsonDropletsImageStatusEnum {
    NEW_UPPER("NEW"),
    NEW_LOWER("new"),
    AVAILABLE("available"),
    PENDING("pending"),
    DELETED("deleted"),
    RETIRED("retired");

    public final String value;

    private ListAllDroplets200ApplicationJsonDropletsImageStatusEnum(String value) {
        this.value = value;
    }
}
