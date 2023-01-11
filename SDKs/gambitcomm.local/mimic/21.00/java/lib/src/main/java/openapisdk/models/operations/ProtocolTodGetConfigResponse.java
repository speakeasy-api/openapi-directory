package openapisdk.models.operations;



public class ProtocolTodGetConfigResponse {
    public openapisdk.models.shared.ConfigTod configTOD;
    public ProtocolTodGetConfigResponse withConfigTod(openapisdk.models.shared.ConfigTod configTOD) {
        this.configTOD = configTOD;
        return this;
    }
    public String contentType;
    public ProtocolTodGetConfigResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ProtocolTodGetConfigResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}