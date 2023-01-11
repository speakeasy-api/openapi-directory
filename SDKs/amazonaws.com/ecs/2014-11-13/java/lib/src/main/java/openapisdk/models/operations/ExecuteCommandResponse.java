package openapisdk.models.operations;



public class ExecuteCommandResponse {
    public Object accessDeniedException;
    public ExecuteCommandResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object clientException;
    public ExecuteCommandResponse withClientException(Object clientException) {
        this.clientException = clientException;
        return this;
    }
    public Object clusterNotFoundException;
    public ExecuteCommandResponse withClusterNotFoundException(Object clusterNotFoundException) {
        this.clusterNotFoundException = clusterNotFoundException;
        return this;
    }
    public String contentType;
    public ExecuteCommandResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ExecuteCommandResponse executeCommandResponse;
    public ExecuteCommandResponse withExecuteCommandResponse(openapisdk.models.shared.ExecuteCommandResponse executeCommandResponse) {
        this.executeCommandResponse = executeCommandResponse;
        return this;
    }
    public Object invalidParameterException;
    public ExecuteCommandResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object serverException;
    public ExecuteCommandResponse withServerException(Object serverException) {
        this.serverException = serverException;
        return this;
    }
    public Long statusCode;
    public ExecuteCommandResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object targetNotConnectedException;
    public ExecuteCommandResponse withTargetNotConnectedException(Object targetNotConnectedException) {
        this.targetNotConnectedException = targetNotConnectedException;
        return this;
    }
}