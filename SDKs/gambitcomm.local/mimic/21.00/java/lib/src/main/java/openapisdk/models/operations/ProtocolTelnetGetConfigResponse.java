package openapisdk.models.operations;



public class ProtocolTelnetGetConfigResponse {
    public openapisdk.models.shared.ConfigTelnet configTELNET;
    public ProtocolTelnetGetConfigResponse withConfigTelnet(openapisdk.models.shared.ConfigTelnet configTELNET) {
        this.configTELNET = configTELNET;
        return this;
    }
    public String contentType;
    public ProtocolTelnetGetConfigResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ProtocolTelnetGetConfigResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}