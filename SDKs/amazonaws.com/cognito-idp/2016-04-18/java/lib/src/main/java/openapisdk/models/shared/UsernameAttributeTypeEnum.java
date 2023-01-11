package openapisdk.models.shared;


public enum UsernameAttributeTypeEnum {
    PHONE_NUMBER("phone_number"),
    EMAIL("email");

    public final String value;

    private UsernameAttributeTypeEnum(String value) {
        this.value = value;
    }
}
