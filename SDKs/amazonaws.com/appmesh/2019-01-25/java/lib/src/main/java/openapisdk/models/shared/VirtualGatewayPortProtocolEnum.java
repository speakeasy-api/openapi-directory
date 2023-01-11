package openapisdk.models.shared;


public enum VirtualGatewayPortProtocolEnum {
    HTTP("http"),
    HTTP2("http2"),
    GRPC("grpc");

    public final String value;

    private VirtualGatewayPortProtocolEnum(String value) {
        this.value = value;
    }
}
