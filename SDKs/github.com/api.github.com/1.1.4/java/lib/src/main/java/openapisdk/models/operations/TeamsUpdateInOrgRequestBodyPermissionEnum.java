package openapisdk.models.operations;


public enum TeamsUpdateInOrgRequestBodyPermissionEnum {
    PULL("pull"),
    PUSH("push"),
    ADMIN("admin");

    public final String value;

    private TeamsUpdateInOrgRequestBodyPermissionEnum(String value) {
        this.value = value;
    }
}
