package openapisdk.models.operations;



public class ListProfileObjectsResponse {
    public Object accessDeniedException;
    public ListProfileObjectsResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object badRequestException;
    public ListProfileObjectsResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public ListProfileObjectsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public ListProfileObjectsResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public openapisdk.models.shared.ListProfileObjectsResponse listProfileObjectsResponse;
    public ListProfileObjectsResponse withListProfileObjectsResponse(openapisdk.models.shared.ListProfileObjectsResponse listProfileObjectsResponse) {
        this.listProfileObjectsResponse = listProfileObjectsResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public ListProfileObjectsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public ListProfileObjectsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListProfileObjectsResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}