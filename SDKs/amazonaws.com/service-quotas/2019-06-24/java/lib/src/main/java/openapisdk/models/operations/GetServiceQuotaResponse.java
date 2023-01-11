package openapisdk.models.operations;



public class GetServiceQuotaResponse {
    public Object accessDeniedException;
    public GetServiceQuotaResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public GetServiceQuotaResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetServiceQuotaResponse getServiceQuotaResponse;
    public GetServiceQuotaResponse withGetServiceQuotaResponse(openapisdk.models.shared.GetServiceQuotaResponse getServiceQuotaResponse) {
        this.getServiceQuotaResponse = getServiceQuotaResponse;
        return this;
    }
    public Object illegalArgumentException;
    public GetServiceQuotaResponse withIllegalArgumentException(Object illegalArgumentException) {
        this.illegalArgumentException = illegalArgumentException;
        return this;
    }
    public Object noSuchResourceException;
    public GetServiceQuotaResponse withNoSuchResourceException(Object noSuchResourceException) {
        this.noSuchResourceException = noSuchResourceException;
        return this;
    }
    public Object serviceException;
    public GetServiceQuotaResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Long statusCode;
    public GetServiceQuotaResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public GetServiceQuotaResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}