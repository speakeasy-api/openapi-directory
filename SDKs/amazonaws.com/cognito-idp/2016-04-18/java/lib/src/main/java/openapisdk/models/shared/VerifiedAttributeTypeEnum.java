package openapisdk.models.shared;


public enum VerifiedAttributeTypeEnum {
    PHONE_NUMBER("phone_number"),
    EMAIL("email");

    public final String value;

    private VerifiedAttributeTypeEnum(String value) {
        this.value = value;
    }
}
