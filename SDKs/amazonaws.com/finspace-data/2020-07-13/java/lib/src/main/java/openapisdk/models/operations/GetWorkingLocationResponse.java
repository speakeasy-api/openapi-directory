package openapisdk.models.operations;



public class GetWorkingLocationResponse {
    public Object accessDeniedException;
    public GetWorkingLocationResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public GetWorkingLocationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetWorkingLocationResponse getWorkingLocationResponse;
    public GetWorkingLocationResponse withGetWorkingLocationResponse(openapisdk.models.shared.GetWorkingLocationResponse getWorkingLocationResponse) {
        this.getWorkingLocationResponse = getWorkingLocationResponse;
        return this;
    }
    public Object internalServerException;
    public GetWorkingLocationResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Long statusCode;
    public GetWorkingLocationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public GetWorkingLocationResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public GetWorkingLocationResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}