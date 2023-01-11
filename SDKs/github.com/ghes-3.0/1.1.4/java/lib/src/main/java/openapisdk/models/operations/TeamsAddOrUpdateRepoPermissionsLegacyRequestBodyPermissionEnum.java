package openapisdk.models.operations;


public enum TeamsAddOrUpdateRepoPermissionsLegacyRequestBodyPermissionEnum {
    PULL("pull"),
    PUSH("push"),
    ADMIN("admin");

    public final String value;

    private TeamsAddOrUpdateRepoPermissionsLegacyRequestBodyPermissionEnum(String value) {
        this.value = value;
    }
}
