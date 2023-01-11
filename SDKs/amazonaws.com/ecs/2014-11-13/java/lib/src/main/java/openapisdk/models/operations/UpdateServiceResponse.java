package openapisdk.models.operations;



public class UpdateServiceResponse {
    public Object accessDeniedException;
    public UpdateServiceResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object clientException;
    public UpdateServiceResponse withClientException(Object clientException) {
        this.clientException = clientException;
        return this;
    }
    public Object clusterNotFoundException;
    public UpdateServiceResponse withClusterNotFoundException(Object clusterNotFoundException) {
        this.clusterNotFoundException = clusterNotFoundException;
        return this;
    }
    public String contentType;
    public UpdateServiceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidParameterException;
    public UpdateServiceResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object platformTaskDefinitionIncompatibilityException;
    public UpdateServiceResponse withPlatformTaskDefinitionIncompatibilityException(Object platformTaskDefinitionIncompatibilityException) {
        this.platformTaskDefinitionIncompatibilityException = platformTaskDefinitionIncompatibilityException;
        return this;
    }
    public Object platformUnknownException;
    public UpdateServiceResponse withPlatformUnknownException(Object platformUnknownException) {
        this.platformUnknownException = platformUnknownException;
        return this;
    }
    public Object serverException;
    public UpdateServiceResponse withServerException(Object serverException) {
        this.serverException = serverException;
        return this;
    }
    public Object serviceNotActiveException;
    public UpdateServiceResponse withServiceNotActiveException(Object serviceNotActiveException) {
        this.serviceNotActiveException = serviceNotActiveException;
        return this;
    }
    public Object serviceNotFoundException;
    public UpdateServiceResponse withServiceNotFoundException(Object serviceNotFoundException) {
        this.serviceNotFoundException = serviceNotFoundException;
        return this;
    }
    public Long statusCode;
    public UpdateServiceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UpdateServiceResponse updateServiceResponse;
    public UpdateServiceResponse withUpdateServiceResponse(openapisdk.models.shared.UpdateServiceResponse updateServiceResponse) {
        this.updateServiceResponse = updateServiceResponse;
        return this;
    }
}