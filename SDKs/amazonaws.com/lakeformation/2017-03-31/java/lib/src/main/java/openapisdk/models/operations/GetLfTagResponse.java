package openapisdk.models.operations;



public class GetLfTagResponse {
    public Object accessDeniedException;
    public GetLfTagResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public GetLfTagResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object entityNotFoundException;
    public GetLfTagResponse withEntityNotFoundException(Object entityNotFoundException) {
        this.entityNotFoundException = entityNotFoundException;
        return this;
    }
    public openapisdk.models.shared.GetLfTagResponse getLFTagResponse;
    public GetLfTagResponse withGetLfTagResponse(openapisdk.models.shared.GetLfTagResponse getLFTagResponse) {
        this.getLFTagResponse = getLFTagResponse;
        return this;
    }
    public Object internalServiceException;
    public GetLfTagResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidInputException;
    public GetLfTagResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object operationTimeoutException;
    public GetLfTagResponse withOperationTimeoutException(Object operationTimeoutException) {
        this.operationTimeoutException = operationTimeoutException;
        return this;
    }
    public Long statusCode;
    public GetLfTagResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}