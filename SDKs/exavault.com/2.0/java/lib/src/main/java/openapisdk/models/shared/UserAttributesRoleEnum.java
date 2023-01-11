package openapisdk.models.shared;


public enum UserAttributesRoleEnum {
    USER("user"),
    ADMIN("admin"),
    MASTER("master");

    public final String value;

    private UserAttributesRoleEnum(String value) {
        this.value = value;
    }
}
