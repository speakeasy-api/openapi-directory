package openapisdk.models.shared;


public enum AclPermissionEnum {
    READ("READ"),
    WRITE("WRITE"),
    READ_ACP("READ_ACP"),
    WRITE_ACP("WRITE_ACP"),
    FULL_CONTROL("FULL_CONTROL");

    public final String value;

    private AclPermissionEnum(String value) {
        this.value = value;
    }
}
