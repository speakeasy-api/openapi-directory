package openapisdk.models.operations;


public enum GetModifyTargetGroupHealthCheckProtocolEnum {
    HTTP("HTTP"),
    HTTPS("HTTPS"),
    TCP("TCP"),
    TLS("TLS"),
    UDP("UDP"),
    TCP_UDP("TCP_UDP"),
    GENEVE("GENEVE");

    public final String value;

    private GetModifyTargetGroupHealthCheckProtocolEnum(String value) {
        this.value = value;
    }
}
