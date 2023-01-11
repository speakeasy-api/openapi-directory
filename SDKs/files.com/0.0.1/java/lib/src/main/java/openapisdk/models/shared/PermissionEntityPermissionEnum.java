package openapisdk.models.shared;


public enum PermissionEntityPermissionEnum {
    FULL("full"),
    READONLY("readonly"),
    WRITEONLY("writeonly"),
    LIST("list"),
    HISTORY("history"),
    ADMIN("admin"),
    BUNDLE("bundle");

    public final String value;

    private PermissionEntityPermissionEnum(String value) {
        this.value = value;
    }
}
