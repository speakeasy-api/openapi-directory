package openapisdk.models.shared;


public enum VirtualNodeStatusCodeEnum {
    ACTIVE("ACTIVE"),
    INACTIVE("INACTIVE"),
    DELETED("DELETED");

    public final String value;

    private VirtualNodeStatusCodeEnum(String value) {
        this.value = value;
    }
}
