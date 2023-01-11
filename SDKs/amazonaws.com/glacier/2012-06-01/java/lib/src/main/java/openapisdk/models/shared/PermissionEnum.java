package openapisdk.models.shared;


public enum PermissionEnum {
    FULL_CONTROL("FULL_CONTROL"),
    WRITE("WRITE"),
    WRITE_ACP("WRITE_ACP"),
    READ("READ"),
    READ_ACP("READ_ACP");

    public final String value;

    private PermissionEnum(String value) {
        this.value = value;
    }
}
