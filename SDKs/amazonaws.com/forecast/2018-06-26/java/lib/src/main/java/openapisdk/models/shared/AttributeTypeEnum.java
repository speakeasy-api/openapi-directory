package openapisdk.models.shared;


public enum AttributeTypeEnum {
    STRING("string"),
    INTEGER("integer"),
    FLOAT("float"),
    TIMESTAMP("timestamp"),
    GEOLOCATION("geolocation");

    public final String value;

    private AttributeTypeEnum(String value) {
        this.value = value;
    }
}
