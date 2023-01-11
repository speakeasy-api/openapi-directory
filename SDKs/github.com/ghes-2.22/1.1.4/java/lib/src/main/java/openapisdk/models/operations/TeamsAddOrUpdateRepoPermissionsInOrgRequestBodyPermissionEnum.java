package openapisdk.models.operations;


public enum TeamsAddOrUpdateRepoPermissionsInOrgRequestBodyPermissionEnum {
    PULL("pull"),
    PUSH("push"),
    ADMIN("admin"),
    MAINTAIN("maintain"),
    TRIAGE("triage");

    public final String value;

    private TeamsAddOrUpdateRepoPermissionsInOrgRequestBodyPermissionEnum(String value) {
        this.value = value;
    }
}
