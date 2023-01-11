package openapisdk.models.shared;


public enum VirtualNodeStatusCodeEnum {
    ACTIVE("ACTIVE"),
    DELETED("DELETED"),
    INACTIVE("INACTIVE");

    public final String value;

    private VirtualNodeStatusCodeEnum(String value) {
        this.value = value;
    }
}
