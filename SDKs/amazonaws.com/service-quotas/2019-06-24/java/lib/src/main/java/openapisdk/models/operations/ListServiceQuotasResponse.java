package openapisdk.models.operations;



public class ListServiceQuotasResponse {
    public Object accessDeniedException;
    public ListServiceQuotasResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public ListServiceQuotasResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object illegalArgumentException;
    public ListServiceQuotasResponse withIllegalArgumentException(Object illegalArgumentException) {
        this.illegalArgumentException = illegalArgumentException;
        return this;
    }
    public Object invalidPaginationTokenException;
    public ListServiceQuotasResponse withInvalidPaginationTokenException(Object invalidPaginationTokenException) {
        this.invalidPaginationTokenException = invalidPaginationTokenException;
        return this;
    }
    public openapisdk.models.shared.ListServiceQuotasResponse listServiceQuotasResponse;
    public ListServiceQuotasResponse withListServiceQuotasResponse(openapisdk.models.shared.ListServiceQuotasResponse listServiceQuotasResponse) {
        this.listServiceQuotasResponse = listServiceQuotasResponse;
        return this;
    }
    public Object noSuchResourceException;
    public ListServiceQuotasResponse withNoSuchResourceException(Object noSuchResourceException) {
        this.noSuchResourceException = noSuchResourceException;
        return this;
    }
    public Object serviceException;
    public ListServiceQuotasResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Long statusCode;
    public ListServiceQuotasResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public ListServiceQuotasResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}