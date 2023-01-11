package openapisdk.models.shared;


public enum RoleEnum {
    USER("user"),
    TEACHER("teacher"),
    ADMIN("admin");

    public final String value;

    private RoleEnum(String value) {
        this.value = value;
    }
}
