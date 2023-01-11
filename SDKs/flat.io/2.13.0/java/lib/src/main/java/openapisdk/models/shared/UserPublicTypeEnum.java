package openapisdk.models.shared;


public enum UserPublicTypeEnum {
    USER("user"),
    GUEST("guest");

    public final String value;

    private UserPublicTypeEnum(String value) {
        this.value = value;
    }
}
