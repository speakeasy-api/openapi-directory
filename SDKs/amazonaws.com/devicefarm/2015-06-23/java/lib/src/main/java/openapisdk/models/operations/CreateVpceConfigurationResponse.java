package openapisdk.models.operations;



public class CreateVpceConfigurationResponse {
    public Object argumentException;
    public CreateVpceConfigurationResponse withArgumentException(Object argumentException) {
        this.argumentException = argumentException;
        return this;
    }
    public String contentType;
    public CreateVpceConfigurationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateVpceConfigurationResult createVPCEConfigurationResult;
    public CreateVpceConfigurationResponse withCreateVpceConfigurationResult(openapisdk.models.shared.CreateVpceConfigurationResult createVPCEConfigurationResult) {
        this.createVPCEConfigurationResult = createVPCEConfigurationResult;
        return this;
    }
    public Object limitExceededException;
    public CreateVpceConfigurationResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object serviceAccountException;
    public CreateVpceConfigurationResponse withServiceAccountException(Object serviceAccountException) {
        this.serviceAccountException = serviceAccountException;
        return this;
    }
    public Long statusCode;
    public CreateVpceConfigurationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}