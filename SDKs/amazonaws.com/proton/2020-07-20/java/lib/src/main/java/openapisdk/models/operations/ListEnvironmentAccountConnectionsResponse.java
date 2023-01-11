package openapisdk.models.operations;



public class ListEnvironmentAccountConnectionsResponse {
    public Object accessDeniedException;
    public ListEnvironmentAccountConnectionsResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public ListEnvironmentAccountConnectionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public ListEnvironmentAccountConnectionsResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public openapisdk.models.shared.ListEnvironmentAccountConnectionsOutput listEnvironmentAccountConnectionsOutput;
    public ListEnvironmentAccountConnectionsResponse withListEnvironmentAccountConnectionsOutput(openapisdk.models.shared.ListEnvironmentAccountConnectionsOutput listEnvironmentAccountConnectionsOutput) {
        this.listEnvironmentAccountConnectionsOutput = listEnvironmentAccountConnectionsOutput;
        return this;
    }
    public Long statusCode;
    public ListEnvironmentAccountConnectionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListEnvironmentAccountConnectionsResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public ListEnvironmentAccountConnectionsResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}