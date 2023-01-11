package openapisdk.models.operations;



public class ListRequestedServiceQuotaChangeHistoryByQuotaResponse {
    public Object accessDeniedException;
    public ListRequestedServiceQuotaChangeHistoryByQuotaResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public ListRequestedServiceQuotaChangeHistoryByQuotaResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object illegalArgumentException;
    public ListRequestedServiceQuotaChangeHistoryByQuotaResponse withIllegalArgumentException(Object illegalArgumentException) {
        this.illegalArgumentException = illegalArgumentException;
        return this;
    }
    public Object invalidPaginationTokenException;
    public ListRequestedServiceQuotaChangeHistoryByQuotaResponse withInvalidPaginationTokenException(Object invalidPaginationTokenException) {
        this.invalidPaginationTokenException = invalidPaginationTokenException;
        return this;
    }
    public openapisdk.models.shared.ListRequestedServiceQuotaChangeHistoryByQuotaResponse listRequestedServiceQuotaChangeHistoryByQuotaResponse;
    public ListRequestedServiceQuotaChangeHistoryByQuotaResponse withListRequestedServiceQuotaChangeHistoryByQuotaResponse(openapisdk.models.shared.ListRequestedServiceQuotaChangeHistoryByQuotaResponse listRequestedServiceQuotaChangeHistoryByQuotaResponse) {
        this.listRequestedServiceQuotaChangeHistoryByQuotaResponse = listRequestedServiceQuotaChangeHistoryByQuotaResponse;
        return this;
    }
    public Object noSuchResourceException;
    public ListRequestedServiceQuotaChangeHistoryByQuotaResponse withNoSuchResourceException(Object noSuchResourceException) {
        this.noSuchResourceException = noSuchResourceException;
        return this;
    }
    public Object serviceException;
    public ListRequestedServiceQuotaChangeHistoryByQuotaResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Long statusCode;
    public ListRequestedServiceQuotaChangeHistoryByQuotaResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public ListRequestedServiceQuotaChangeHistoryByQuotaResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}