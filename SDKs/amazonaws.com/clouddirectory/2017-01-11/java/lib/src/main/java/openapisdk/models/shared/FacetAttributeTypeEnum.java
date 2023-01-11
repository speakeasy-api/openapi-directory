package openapisdk.models.shared;


public enum FacetAttributeTypeEnum {
    STRING("STRING"),
    BINARY("BINARY"),
    BOOLEAN_("BOOLEAN"),
    NUMBER("NUMBER"),
    DATETIME("DATETIME"),
    VARIANT("VARIANT");

    public final String value;

    private FacetAttributeTypeEnum(String value) {
        this.value = value;
    }
}
