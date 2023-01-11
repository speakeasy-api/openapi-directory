package openapisdk.models.shared;


public enum VirtualRouterStatusCodeEnum {
    ACTIVE("ACTIVE"),
    INACTIVE("INACTIVE"),
    DELETED("DELETED");

    public final String value;

    private VirtualRouterStatusCodeEnum(String value) {
        this.value = value;
    }
}
