package openapisdk.models.operations;



public class GetVpceConfigurationResponse {
    public Object argumentException;
    public GetVpceConfigurationResponse withArgumentException(Object argumentException) {
        this.argumentException = argumentException;
        return this;
    }
    public String contentType;
    public GetVpceConfigurationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetVpceConfigurationResult getVPCEConfigurationResult;
    public GetVpceConfigurationResponse withGetVpceConfigurationResult(openapisdk.models.shared.GetVpceConfigurationResult getVPCEConfigurationResult) {
        this.getVPCEConfigurationResult = getVPCEConfigurationResult;
        return this;
    }
    public Object notFoundException;
    public GetVpceConfigurationResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Object serviceAccountException;
    public GetVpceConfigurationResponse withServiceAccountException(Object serviceAccountException) {
        this.serviceAccountException = serviceAccountException;
        return this;
    }
    public Long statusCode;
    public GetVpceConfigurationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}