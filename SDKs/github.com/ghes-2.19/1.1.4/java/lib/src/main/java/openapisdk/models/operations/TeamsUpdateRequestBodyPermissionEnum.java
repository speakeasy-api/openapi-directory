package openapisdk.models.operations;


public enum TeamsUpdateRequestBodyPermissionEnum {
    PULL("pull"),
    PUSH("push"),
    ADMIN("admin");

    public final String value;

    private TeamsUpdateRequestBodyPermissionEnum(String value) {
        this.value = value;
    }
}
