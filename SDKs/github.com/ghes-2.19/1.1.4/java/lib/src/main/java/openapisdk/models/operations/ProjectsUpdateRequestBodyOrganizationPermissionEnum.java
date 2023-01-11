package openapisdk.models.operations;


public enum ProjectsUpdateRequestBodyOrganizationPermissionEnum {
    READ("read"),
    WRITE("write"),
    ADMIN("admin"),
    NONE("none");

    public final String value;

    private ProjectsUpdateRequestBodyOrganizationPermissionEnum(String value) {
        this.value = value;
    }
}
