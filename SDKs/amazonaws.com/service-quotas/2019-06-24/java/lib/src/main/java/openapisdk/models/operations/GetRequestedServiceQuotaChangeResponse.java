package openapisdk.models.operations;



public class GetRequestedServiceQuotaChangeResponse {
    public Object accessDeniedException;
    public GetRequestedServiceQuotaChangeResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public GetRequestedServiceQuotaChangeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetRequestedServiceQuotaChangeResponse getRequestedServiceQuotaChangeResponse;
    public GetRequestedServiceQuotaChangeResponse withGetRequestedServiceQuotaChangeResponse(openapisdk.models.shared.GetRequestedServiceQuotaChangeResponse getRequestedServiceQuotaChangeResponse) {
        this.getRequestedServiceQuotaChangeResponse = getRequestedServiceQuotaChangeResponse;
        return this;
    }
    public Object illegalArgumentException;
    public GetRequestedServiceQuotaChangeResponse withIllegalArgumentException(Object illegalArgumentException) {
        this.illegalArgumentException = illegalArgumentException;
        return this;
    }
    public Object noSuchResourceException;
    public GetRequestedServiceQuotaChangeResponse withNoSuchResourceException(Object noSuchResourceException) {
        this.noSuchResourceException = noSuchResourceException;
        return this;
    }
    public Object serviceException;
    public GetRequestedServiceQuotaChangeResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Long statusCode;
    public GetRequestedServiceQuotaChangeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public GetRequestedServiceQuotaChangeResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}