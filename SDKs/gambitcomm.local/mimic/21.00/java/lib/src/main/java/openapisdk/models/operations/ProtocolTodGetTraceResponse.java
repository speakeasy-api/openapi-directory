package openapisdk.models.operations;



public class ProtocolTodGetTraceResponse {
    public openapisdk.models.shared.ConfigTod configTOD;
    public ProtocolTodGetTraceResponse withConfigTod(openapisdk.models.shared.ConfigTod configTOD) {
        this.configTOD = configTOD;
        return this;
    }
    public String contentType;
    public ProtocolTodGetTraceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ProtocolTodGetTraceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}