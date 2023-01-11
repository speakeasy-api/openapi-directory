package openapisdk.models.operations;



public class RequestServiceQuotaIncreaseResponse {
    public Object accessDeniedException;
    public RequestServiceQuotaIncreaseResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public RequestServiceQuotaIncreaseResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object dependencyAccessDeniedException;
    public RequestServiceQuotaIncreaseResponse withDependencyAccessDeniedException(Object dependencyAccessDeniedException) {
        this.dependencyAccessDeniedException = dependencyAccessDeniedException;
        return this;
    }
    public Object illegalArgumentException;
    public RequestServiceQuotaIncreaseResponse withIllegalArgumentException(Object illegalArgumentException) {
        this.illegalArgumentException = illegalArgumentException;
        return this;
    }
    public Object invalidResourceStateException;
    public RequestServiceQuotaIncreaseResponse withInvalidResourceStateException(Object invalidResourceStateException) {
        this.invalidResourceStateException = invalidResourceStateException;
        return this;
    }
    public Object noSuchResourceException;
    public RequestServiceQuotaIncreaseResponse withNoSuchResourceException(Object noSuchResourceException) {
        this.noSuchResourceException = noSuchResourceException;
        return this;
    }
    public Object quotaExceededException;
    public RequestServiceQuotaIncreaseResponse withQuotaExceededException(Object quotaExceededException) {
        this.quotaExceededException = quotaExceededException;
        return this;
    }
    public openapisdk.models.shared.RequestServiceQuotaIncreaseResponse requestServiceQuotaIncreaseResponse;
    public RequestServiceQuotaIncreaseResponse withRequestServiceQuotaIncreaseResponse(openapisdk.models.shared.RequestServiceQuotaIncreaseResponse requestServiceQuotaIncreaseResponse) {
        this.requestServiceQuotaIncreaseResponse = requestServiceQuotaIncreaseResponse;
        return this;
    }
    public Object resourceAlreadyExistsException;
    public RequestServiceQuotaIncreaseResponse withResourceAlreadyExistsException(Object resourceAlreadyExistsException) {
        this.resourceAlreadyExistsException = resourceAlreadyExistsException;
        return this;
    }
    public Object serviceException;
    public RequestServiceQuotaIncreaseResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Long statusCode;
    public RequestServiceQuotaIncreaseResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public RequestServiceQuotaIncreaseResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}