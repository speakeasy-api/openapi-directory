package openapisdk.models.shared;


public enum PermissionEnum {
    ADMINISTRATOR("ADMINISTRATOR"),
    VIEWER("VIEWER");

    public final String value;

    private PermissionEnum(String value) {
        this.value = value;
    }
}
