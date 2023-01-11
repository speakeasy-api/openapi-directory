package openapisdk.models.operations;



public class CreateServiceResponse {
    public Object accessDeniedException;
    public CreateServiceResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object clientException;
    public CreateServiceResponse withClientException(Object clientException) {
        this.clientException = clientException;
        return this;
    }
    public Object clusterNotFoundException;
    public CreateServiceResponse withClusterNotFoundException(Object clusterNotFoundException) {
        this.clusterNotFoundException = clusterNotFoundException;
        return this;
    }
    public String contentType;
    public CreateServiceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateServiceResponse createServiceResponse;
    public CreateServiceResponse withCreateServiceResponse(openapisdk.models.shared.CreateServiceResponse createServiceResponse) {
        this.createServiceResponse = createServiceResponse;
        return this;
    }
    public Object invalidParameterException;
    public CreateServiceResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object platformTaskDefinitionIncompatibilityException;
    public CreateServiceResponse withPlatformTaskDefinitionIncompatibilityException(Object platformTaskDefinitionIncompatibilityException) {
        this.platformTaskDefinitionIncompatibilityException = platformTaskDefinitionIncompatibilityException;
        return this;
    }
    public Object platformUnknownException;
    public CreateServiceResponse withPlatformUnknownException(Object platformUnknownException) {
        this.platformUnknownException = platformUnknownException;
        return this;
    }
    public Object serverException;
    public CreateServiceResponse withServerException(Object serverException) {
        this.serverException = serverException;
        return this;
    }
    public Long statusCode;
    public CreateServiceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unsupportedFeatureException;
    public CreateServiceResponse withUnsupportedFeatureException(Object unsupportedFeatureException) {
        this.unsupportedFeatureException = unsupportedFeatureException;
        return this;
    }
}