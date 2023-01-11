package openapisdk.models.operations;



public class CreateTaskSetResponse {
    public Object accessDeniedException;
    public CreateTaskSetResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object clientException;
    public CreateTaskSetResponse withClientException(Object clientException) {
        this.clientException = clientException;
        return this;
    }
    public Object clusterNotFoundException;
    public CreateTaskSetResponse withClusterNotFoundException(Object clusterNotFoundException) {
        this.clusterNotFoundException = clusterNotFoundException;
        return this;
    }
    public String contentType;
    public CreateTaskSetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateTaskSetResponse createTaskSetResponse;
    public CreateTaskSetResponse withCreateTaskSetResponse(openapisdk.models.shared.CreateTaskSetResponse createTaskSetResponse) {
        this.createTaskSetResponse = createTaskSetResponse;
        return this;
    }
    public Object invalidParameterException;
    public CreateTaskSetResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object platformTaskDefinitionIncompatibilityException;
    public CreateTaskSetResponse withPlatformTaskDefinitionIncompatibilityException(Object platformTaskDefinitionIncompatibilityException) {
        this.platformTaskDefinitionIncompatibilityException = platformTaskDefinitionIncompatibilityException;
        return this;
    }
    public Object platformUnknownException;
    public CreateTaskSetResponse withPlatformUnknownException(Object platformUnknownException) {
        this.platformUnknownException = platformUnknownException;
        return this;
    }
    public Object serverException;
    public CreateTaskSetResponse withServerException(Object serverException) {
        this.serverException = serverException;
        return this;
    }
    public Object serviceNotActiveException;
    public CreateTaskSetResponse withServiceNotActiveException(Object serviceNotActiveException) {
        this.serviceNotActiveException = serviceNotActiveException;
        return this;
    }
    public Object serviceNotFoundException;
    public CreateTaskSetResponse withServiceNotFoundException(Object serviceNotFoundException) {
        this.serviceNotFoundException = serviceNotFoundException;
        return this;
    }
    public Long statusCode;
    public CreateTaskSetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unsupportedFeatureException;
    public CreateTaskSetResponse withUnsupportedFeatureException(Object unsupportedFeatureException) {
        this.unsupportedFeatureException = unsupportedFeatureException;
        return this;
    }
}