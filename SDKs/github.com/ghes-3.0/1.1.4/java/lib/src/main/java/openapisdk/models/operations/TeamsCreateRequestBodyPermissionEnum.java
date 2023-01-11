package openapisdk.models.operations;


public enum TeamsCreateRequestBodyPermissionEnum {
    PULL("pull"),
    PUSH("push"),
    ADMIN("admin");

    public final String value;

    private TeamsCreateRequestBodyPermissionEnum(String value) {
        this.value = value;
    }
}
