package openapisdk.models.operations;



public class ProtocolProxyGetTraceResponse {
    public openapisdk.models.shared.ConfigProxy configPROXY;
    public ProtocolProxyGetTraceResponse withConfigProxy(openapisdk.models.shared.ConfigProxy configPROXY) {
        this.configPROXY = configPROXY;
        return this;
    }
    public String contentType;
    public ProtocolProxyGetTraceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ProtocolProxyGetTraceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}