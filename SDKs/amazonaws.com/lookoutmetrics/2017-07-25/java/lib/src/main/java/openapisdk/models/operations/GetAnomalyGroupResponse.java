package openapisdk.models.operations;



public class GetAnomalyGroupResponse {
    public Object accessDeniedException;
    public GetAnomalyGroupResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public GetAnomalyGroupResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetAnomalyGroupResponse getAnomalyGroupResponse;
    public GetAnomalyGroupResponse withGetAnomalyGroupResponse(openapisdk.models.shared.GetAnomalyGroupResponse getAnomalyGroupResponse) {
        this.getAnomalyGroupResponse = getAnomalyGroupResponse;
        return this;
    }
    public Object internalServerException;
    public GetAnomalyGroupResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetAnomalyGroupResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public GetAnomalyGroupResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public GetAnomalyGroupResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
    public Object validationException;
    public GetAnomalyGroupResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}