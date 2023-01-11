package openapisdk.models.shared;


public enum PermissionTypeEnum {
    READONLY("READONLY"),
    CONTRIBUTOR("CONTRIBUTOR");

    public final String value;

    private PermissionTypeEnum(String value) {
        this.value = value;
    }
}
