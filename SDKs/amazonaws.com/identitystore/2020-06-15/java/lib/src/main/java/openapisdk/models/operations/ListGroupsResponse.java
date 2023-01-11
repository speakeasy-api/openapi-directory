package openapisdk.models.operations;



public class ListGroupsResponse {
    public Object accessDeniedException;
    public ListGroupsResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public ListGroupsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public ListGroupsResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public openapisdk.models.shared.ListGroupsResponse listGroupsResponse;
    public ListGroupsResponse withListGroupsResponse(openapisdk.models.shared.ListGroupsResponse listGroupsResponse) {
        this.listGroupsResponse = listGroupsResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public ListGroupsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public ListGroupsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListGroupsResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public ListGroupsResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}