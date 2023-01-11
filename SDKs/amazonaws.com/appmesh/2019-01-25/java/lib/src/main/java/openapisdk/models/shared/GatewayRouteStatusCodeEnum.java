package openapisdk.models.shared;


public enum GatewayRouteStatusCodeEnum {
    ACTIVE("ACTIVE"),
    INACTIVE("INACTIVE"),
    DELETED("DELETED");

    public final String value;

    private GatewayRouteStatusCodeEnum(String value) {
        this.value = value;
    }
}
