package openapisdk.models.operations;


public enum TeamsAddOrUpdateProjectPermissionsInOrgRequestBodyPermissionEnum {
    READ("read"),
    WRITE("write"),
    ADMIN("admin");

    public final String value;

    private TeamsAddOrUpdateProjectPermissionsInOrgRequestBodyPermissionEnum(String value) {
        this.value = value;
    }
}
