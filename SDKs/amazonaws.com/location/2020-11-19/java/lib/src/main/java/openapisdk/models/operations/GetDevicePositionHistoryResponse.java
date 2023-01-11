package openapisdk.models.operations;



public class GetDevicePositionHistoryResponse {
    public Object accessDeniedException;
    public GetDevicePositionHistoryResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public GetDevicePositionHistoryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetDevicePositionHistoryResponse getDevicePositionHistoryResponse;
    public GetDevicePositionHistoryResponse withGetDevicePositionHistoryResponse(openapisdk.models.shared.GetDevicePositionHistoryResponse getDevicePositionHistoryResponse) {
        this.getDevicePositionHistoryResponse = getDevicePositionHistoryResponse;
        return this;
    }
    public Object internalServerException;
    public GetDevicePositionHistoryResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetDevicePositionHistoryResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public GetDevicePositionHistoryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public GetDevicePositionHistoryResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public GetDevicePositionHistoryResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}