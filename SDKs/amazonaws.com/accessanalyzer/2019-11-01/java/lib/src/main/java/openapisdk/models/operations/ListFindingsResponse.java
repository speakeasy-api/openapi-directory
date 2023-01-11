package openapisdk.models.operations;



public class ListFindingsResponse {
    public Object accessDeniedException;
    public ListFindingsResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public ListFindingsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public ListFindingsResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public openapisdk.models.shared.ListFindingsResponse listFindingsResponse;
    public ListFindingsResponse withListFindingsResponse(openapisdk.models.shared.ListFindingsResponse listFindingsResponse) {
        this.listFindingsResponse = listFindingsResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public ListFindingsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public ListFindingsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListFindingsResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public ListFindingsResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}