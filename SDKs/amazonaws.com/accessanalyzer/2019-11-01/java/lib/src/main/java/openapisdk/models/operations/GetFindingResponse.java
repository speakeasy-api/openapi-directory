package openapisdk.models.operations;



public class GetFindingResponse {
    public Object accessDeniedException;
    public GetFindingResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public GetFindingResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetFindingResponse getFindingResponse;
    public GetFindingResponse withGetFindingResponse(openapisdk.models.shared.GetFindingResponse getFindingResponse) {
        this.getFindingResponse = getFindingResponse;
        return this;
    }
    public Object internalServerException;
    public GetFindingResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetFindingResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public GetFindingResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public GetFindingResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public GetFindingResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}