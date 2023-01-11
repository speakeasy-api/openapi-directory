package openapisdk.models.operations;



public class UpdateVpceConfigurationResponse {
    public Object argumentException;
    public UpdateVpceConfigurationResponse withArgumentException(Object argumentException) {
        this.argumentException = argumentException;
        return this;
    }
    public String contentType;
    public UpdateVpceConfigurationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidOperationException;
    public UpdateVpceConfigurationResponse withInvalidOperationException(Object invalidOperationException) {
        this.invalidOperationException = invalidOperationException;
        return this;
    }
    public Object notFoundException;
    public UpdateVpceConfigurationResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Object serviceAccountException;
    public UpdateVpceConfigurationResponse withServiceAccountException(Object serviceAccountException) {
        this.serviceAccountException = serviceAccountException;
        return this;
    }
    public Long statusCode;
    public UpdateVpceConfigurationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UpdateVpceConfigurationResult updateVPCEConfigurationResult;
    public UpdateVpceConfigurationResponse withUpdateVpceConfigurationResult(openapisdk.models.shared.UpdateVpceConfigurationResult updateVPCEConfigurationResult) {
        this.updateVPCEConfigurationResult = updateVPCEConfigurationResult;
        return this;
    }
}