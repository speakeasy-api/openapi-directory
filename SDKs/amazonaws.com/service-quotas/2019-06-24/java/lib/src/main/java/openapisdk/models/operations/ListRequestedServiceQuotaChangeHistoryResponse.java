package openapisdk.models.operations;



public class ListRequestedServiceQuotaChangeHistoryResponse {
    public Object accessDeniedException;
    public ListRequestedServiceQuotaChangeHistoryResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public ListRequestedServiceQuotaChangeHistoryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object illegalArgumentException;
    public ListRequestedServiceQuotaChangeHistoryResponse withIllegalArgumentException(Object illegalArgumentException) {
        this.illegalArgumentException = illegalArgumentException;
        return this;
    }
    public Object invalidPaginationTokenException;
    public ListRequestedServiceQuotaChangeHistoryResponse withInvalidPaginationTokenException(Object invalidPaginationTokenException) {
        this.invalidPaginationTokenException = invalidPaginationTokenException;
        return this;
    }
    public openapisdk.models.shared.ListRequestedServiceQuotaChangeHistoryResponse listRequestedServiceQuotaChangeHistoryResponse;
    public ListRequestedServiceQuotaChangeHistoryResponse withListRequestedServiceQuotaChangeHistoryResponse(openapisdk.models.shared.ListRequestedServiceQuotaChangeHistoryResponse listRequestedServiceQuotaChangeHistoryResponse) {
        this.listRequestedServiceQuotaChangeHistoryResponse = listRequestedServiceQuotaChangeHistoryResponse;
        return this;
    }
    public Object noSuchResourceException;
    public ListRequestedServiceQuotaChangeHistoryResponse withNoSuchResourceException(Object noSuchResourceException) {
        this.noSuchResourceException = noSuchResourceException;
        return this;
    }
    public Object serviceException;
    public ListRequestedServiceQuotaChangeHistoryResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Long statusCode;
    public ListRequestedServiceQuotaChangeHistoryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public ListRequestedServiceQuotaChangeHistoryResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}