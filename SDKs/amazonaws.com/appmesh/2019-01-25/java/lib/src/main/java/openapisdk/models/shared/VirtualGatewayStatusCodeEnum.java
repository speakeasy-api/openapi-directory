package openapisdk.models.shared;


public enum VirtualGatewayStatusCodeEnum {
    ACTIVE("ACTIVE"),
    INACTIVE("INACTIVE"),
    DELETED("DELETED");

    public final String value;

    private VirtualGatewayStatusCodeEnum(String value) {
        this.value = value;
    }
}
