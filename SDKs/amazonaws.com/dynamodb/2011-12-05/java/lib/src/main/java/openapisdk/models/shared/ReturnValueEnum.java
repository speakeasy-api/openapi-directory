package openapisdk.models.shared;


public enum ReturnValueEnum {
    NONE("NONE"),
    ALL_OLD("ALL_OLD"),
    UPDATED_OLD("UPDATED_OLD"),
    ALL_NEW("ALL_NEW"),
    UPDATED_NEW("UPDATED_NEW");

    public final String value;

    private ReturnValueEnum(String value) {
        this.value = value;
    }
}
