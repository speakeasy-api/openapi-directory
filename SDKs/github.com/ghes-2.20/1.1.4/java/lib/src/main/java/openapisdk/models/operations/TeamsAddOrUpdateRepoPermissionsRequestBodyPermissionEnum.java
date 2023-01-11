package openapisdk.models.operations;


public enum TeamsAddOrUpdateRepoPermissionsRequestBodyPermissionEnum {
    PULL("pull"),
    PUSH("push"),
    ADMIN("admin");

    public final String value;

    private TeamsAddOrUpdateRepoPermissionsRequestBodyPermissionEnum(String value) {
        this.value = value;
    }
}
