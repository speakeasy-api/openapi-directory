package openapisdk.models.shared;


public enum PermissionsEnum {
    OWNER("owner"),
    READ_WRITE("read-write"),
    READ_ONLY("read-only");

    public final String value;

    private PermissionsEnum(String value) {
        this.value = value;
    }
}
