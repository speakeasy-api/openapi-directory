package openapisdk.models.shared;


public enum CustomFieldResponseResourceSubtypeEnum {
    TEXT("text"),
    ENUM_("enum"),
    MULTI_ENUM("multi_enum"),
    NUMBER("number");

    public final String value;

    private CustomFieldResponseResourceSubtypeEnum(String value) {
        this.value = value;
    }
}
