package openapisdk.models.operations;



public class ListProfileObjectTypesResponse {
    public Object accessDeniedException;
    public ListProfileObjectTypesResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object badRequestException;
    public ListProfileObjectTypesResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public ListProfileObjectTypesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public ListProfileObjectTypesResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public openapisdk.models.shared.ListProfileObjectTypesResponse listProfileObjectTypesResponse;
    public ListProfileObjectTypesResponse withListProfileObjectTypesResponse(openapisdk.models.shared.ListProfileObjectTypesResponse listProfileObjectTypesResponse) {
        this.listProfileObjectTypesResponse = listProfileObjectTypesResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public ListProfileObjectTypesResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public ListProfileObjectTypesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListProfileObjectTypesResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}