package openapisdk.models.operations;



public class ProtocolCoapGetConfigResponse {
    public openapisdk.models.shared.ConfigCoap configCOAP;
    public ProtocolCoapGetConfigResponse withConfigCoap(openapisdk.models.shared.ConfigCoap configCOAP) {
        this.configCOAP = configCOAP;
        return this;
    }
    public String contentType;
    public ProtocolCoapGetConfigResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ProtocolCoapGetConfigResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}