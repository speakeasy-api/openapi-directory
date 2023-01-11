package openapisdk.models.shared;


public enum UserDetailsTypeEnum {
    USER("user"),
    GUEST("guest");

    public final String value;

    private UserDetailsTypeEnum(String value) {
        this.value = value;
    }
}
