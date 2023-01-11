package openapisdk.models.shared;


public enum FieldContentTypeEnum {
    STRING("STRING"),
    NUMBER("NUMBER"),
    PHONE_NUMBER("PHONE_NUMBER"),
    EMAIL_ADDRESS("EMAIL_ADDRESS"),
    NAME("NAME");

    public final String value;

    private FieldContentTypeEnum(String value) {
        this.value = value;
    }
}
