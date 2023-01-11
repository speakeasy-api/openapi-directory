package openapisdk.models.operations;



public class RunTaskResponse {
    public Object accessDeniedException;
    public RunTaskResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object blockedException;
    public RunTaskResponse withBlockedException(Object blockedException) {
        this.blockedException = blockedException;
        return this;
    }
    public Object clientException;
    public RunTaskResponse withClientException(Object clientException) {
        this.clientException = clientException;
        return this;
    }
    public Object clusterNotFoundException;
    public RunTaskResponse withClusterNotFoundException(Object clusterNotFoundException) {
        this.clusterNotFoundException = clusterNotFoundException;
        return this;
    }
    public String contentType;
    public RunTaskResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidParameterException;
    public RunTaskResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object platformTaskDefinitionIncompatibilityException;
    public RunTaskResponse withPlatformTaskDefinitionIncompatibilityException(Object platformTaskDefinitionIncompatibilityException) {
        this.platformTaskDefinitionIncompatibilityException = platformTaskDefinitionIncompatibilityException;
        return this;
    }
    public Object platformUnknownException;
    public RunTaskResponse withPlatformUnknownException(Object platformUnknownException) {
        this.platformUnknownException = platformUnknownException;
        return this;
    }
    public openapisdk.models.shared.RunTaskResponse runTaskResponse;
    public RunTaskResponse withRunTaskResponse(openapisdk.models.shared.RunTaskResponse runTaskResponse) {
        this.runTaskResponse = runTaskResponse;
        return this;
    }
    public Object serverException;
    public RunTaskResponse withServerException(Object serverException) {
        this.serverException = serverException;
        return this;
    }
    public Long statusCode;
    public RunTaskResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unsupportedFeatureException;
    public RunTaskResponse withUnsupportedFeatureException(Object unsupportedFeatureException) {
        this.unsupportedFeatureException = unsupportedFeatureException;
        return this;
    }
}