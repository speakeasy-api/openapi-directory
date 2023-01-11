package openapisdk.models.shared;


public enum ProjectOrganizationPermissionEnum {
    READ("read"),
    WRITE("write"),
    ADMIN("admin"),
    NONE("none");

    public final String value;

    private ProjectOrganizationPermissionEnum(String value) {
        this.value = value;
    }
}
