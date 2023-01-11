package openapisdk.models.operations;



public class ListWorkspacesResponse {
    public Object accessDeniedException;
    public ListWorkspacesResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public ListWorkspacesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public ListWorkspacesResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public openapisdk.models.shared.ListWorkspacesResponse listWorkspacesResponse;
    public ListWorkspacesResponse withListWorkspacesResponse(openapisdk.models.shared.ListWorkspacesResponse listWorkspacesResponse) {
        this.listWorkspacesResponse = listWorkspacesResponse;
        return this;
    }
    public Long statusCode;
    public ListWorkspacesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListWorkspacesResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public ListWorkspacesResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}