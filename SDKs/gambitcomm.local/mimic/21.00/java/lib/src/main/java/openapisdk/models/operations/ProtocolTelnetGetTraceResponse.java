package openapisdk.models.operations;



public class ProtocolTelnetGetTraceResponse {
    public openapisdk.models.shared.ConfigTelnet configTELNET;
    public ProtocolTelnetGetTraceResponse withConfigTelnet(openapisdk.models.shared.ConfigTelnet configTELNET) {
        this.configTELNET = configTELNET;
        return this;
    }
    public String contentType;
    public ProtocolTelnetGetTraceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ProtocolTelnetGetTraceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}