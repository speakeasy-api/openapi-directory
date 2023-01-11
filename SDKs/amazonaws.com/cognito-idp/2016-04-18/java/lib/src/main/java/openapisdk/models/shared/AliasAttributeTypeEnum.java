package openapisdk.models.shared;


public enum AliasAttributeTypeEnum {
    PHONE_NUMBER("phone_number"),
    EMAIL("email"),
    PREFERRED_USERNAME("preferred_username");

    public final String value;

    private AliasAttributeTypeEnum(String value) {
        this.value = value;
    }
}
