package openapisdk.models.shared;


public enum CustomFieldCompactResourceSubtypeEnum {
    TEXT("text"),
    ENUM_("enum"),
    MULTI_ENUM("multi_enum"),
    NUMBER("number");

    public final String value;

    private CustomFieldCompactResourceSubtypeEnum(String value) {
        this.value = value;
    }
}
