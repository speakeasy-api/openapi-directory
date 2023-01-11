package openapisdk.models.shared;


public enum MeshStatusCodeEnum {
    ACTIVE("ACTIVE"),
    INACTIVE("INACTIVE"),
    DELETED("DELETED");

    public final String value;

    private MeshStatusCodeEnum(String value) {
        this.value = value;
    }
}
