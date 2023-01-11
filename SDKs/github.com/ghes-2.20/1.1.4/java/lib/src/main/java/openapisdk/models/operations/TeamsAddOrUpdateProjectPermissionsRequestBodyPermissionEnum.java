package openapisdk.models.operations;


public enum TeamsAddOrUpdateProjectPermissionsRequestBodyPermissionEnum {
    READ("read"),
    WRITE("write"),
    ADMIN("admin");

    public final String value;

    private TeamsAddOrUpdateProjectPermissionsRequestBodyPermissionEnum(String value) {
        this.value = value;
    }
}
