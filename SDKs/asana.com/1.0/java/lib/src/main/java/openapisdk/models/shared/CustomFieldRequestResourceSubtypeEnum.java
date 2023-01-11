package openapisdk.models.shared;


public enum CustomFieldRequestResourceSubtypeEnum {
    TEXT("text"),
    ENUM_("enum"),
    MULTI_ENUM("multi_enum"),
    NUMBER("number");

    public final String value;

    private CustomFieldRequestResourceSubtypeEnum(String value) {
        this.value = value;
    }
}
