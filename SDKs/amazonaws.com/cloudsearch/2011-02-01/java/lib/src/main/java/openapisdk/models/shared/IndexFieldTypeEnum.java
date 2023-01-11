package openapisdk.models.shared;


public enum IndexFieldTypeEnum {
    UINT("uint"),
    LITERAL("literal"),
    TEXT("text");

    public final String value;

    private IndexFieldTypeEnum(String value) {
        this.value = value;
    }
}
