package openapisdk.models.shared;


public enum OrganizationRolesEnum {
    ADMIN("admin"),
    BILLING("billing"),
    TEACHER("teacher"),
    USER("user");

    public final String value;

    private OrganizationRolesEnum(String value) {
        this.value = value;
    }
}
