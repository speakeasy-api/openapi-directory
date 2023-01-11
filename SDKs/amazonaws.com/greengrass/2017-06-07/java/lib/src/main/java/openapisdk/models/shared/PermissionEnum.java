package openapisdk.models.shared;


public enum PermissionEnum {
    RO("ro"),
    RW("rw");

    public final String value;

    private PermissionEnum(String value) {
        this.value = value;
    }
}
