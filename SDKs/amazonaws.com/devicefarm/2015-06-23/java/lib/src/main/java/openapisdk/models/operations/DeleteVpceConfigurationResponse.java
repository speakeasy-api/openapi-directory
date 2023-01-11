package openapisdk.models.operations;



public class DeleteVpceConfigurationResponse {
    public Object argumentException;
    public DeleteVpceConfigurationResponse withArgumentException(Object argumentException) {
        this.argumentException = argumentException;
        return this;
    }
    public String contentType;
    public DeleteVpceConfigurationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deleteVPCEConfigurationResult;
    public DeleteVpceConfigurationResponse withDeleteVpceConfigurationResult(java.util.Map<String, Object> deleteVPCEConfigurationResult) {
        this.deleteVPCEConfigurationResult = deleteVPCEConfigurationResult;
        return this;
    }
    public Object invalidOperationException;
    public DeleteVpceConfigurationResponse withInvalidOperationException(Object invalidOperationException) {
        this.invalidOperationException = invalidOperationException;
        return this;
    }
    public Object notFoundException;
    public DeleteVpceConfigurationResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Object serviceAccountException;
    public DeleteVpceConfigurationResponse withServiceAccountException(Object serviceAccountException) {
        this.serviceAccountException = serviceAccountException;
        return this;
    }
    public Long statusCode;
    public DeleteVpceConfigurationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}