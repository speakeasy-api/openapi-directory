package openapisdk.models.shared;


public enum UserRoleEnum {
    USER("USER"),
    RESOURCE("RESOURCE"),
    SYSTEM_USER("SYSTEM_USER");

    public final String value;

    private UserRoleEnum(String value) {
        this.value = value;
    }
}
