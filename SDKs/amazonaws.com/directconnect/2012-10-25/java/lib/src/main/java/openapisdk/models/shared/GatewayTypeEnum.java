package openapisdk.models.shared;


public enum GatewayTypeEnum {
    VIRTUAL_PRIVATE_GATEWAY("virtualPrivateGateway"),
    TRANSIT_GATEWAY("transitGateway");

    public final String value;

    private GatewayTypeEnum(String value) {
        this.value = value;
    }
}
