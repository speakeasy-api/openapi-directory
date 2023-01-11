package openapisdk.models.operations;



public class ProtocolCoapGetTraceResponse {
    public openapisdk.models.shared.ConfigCoap configCOAP;
    public ProtocolCoapGetTraceResponse withConfigCoap(openapisdk.models.shared.ConfigCoap configCOAP) {
        this.configCOAP = configCOAP;
        return this;
    }
    public String contentType;
    public ProtocolCoapGetTraceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ProtocolCoapGetTraceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}