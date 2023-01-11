package openapisdk.models.shared;


public enum PortProtocolEnum {
    HTTP("http"),
    TCP("tcp"),
    HTTP2("http2"),
    GRPC("grpc");

    public final String value;

    private PortProtocolEnum(String value) {
        this.value = value;
    }
}
