package openapisdk.models.operations;



public class ProtocolProxyGetConfigResponse {
    public openapisdk.models.shared.ConfigProxy configPROXY;
    public ProtocolProxyGetConfigResponse withConfigProxy(openapisdk.models.shared.ConfigProxy configPROXY) {
        this.configPROXY = configPROXY;
        return this;
    }
    public String contentType;
    public ProtocolProxyGetConfigResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ProtocolProxyGetConfigResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}