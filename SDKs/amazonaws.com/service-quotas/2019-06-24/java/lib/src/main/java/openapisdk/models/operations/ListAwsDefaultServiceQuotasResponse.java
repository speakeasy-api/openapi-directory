package openapisdk.models.operations;



public class ListAwsDefaultServiceQuotasResponse {
    public Object accessDeniedException;
    public ListAwsDefaultServiceQuotasResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public ListAwsDefaultServiceQuotasResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object illegalArgumentException;
    public ListAwsDefaultServiceQuotasResponse withIllegalArgumentException(Object illegalArgumentException) {
        this.illegalArgumentException = illegalArgumentException;
        return this;
    }
    public Object invalidPaginationTokenException;
    public ListAwsDefaultServiceQuotasResponse withInvalidPaginationTokenException(Object invalidPaginationTokenException) {
        this.invalidPaginationTokenException = invalidPaginationTokenException;
        return this;
    }
    public openapisdk.models.shared.ListAwsDefaultServiceQuotasResponse listAWSDefaultServiceQuotasResponse;
    public ListAwsDefaultServiceQuotasResponse withListAwsDefaultServiceQuotasResponse(openapisdk.models.shared.ListAwsDefaultServiceQuotasResponse listAWSDefaultServiceQuotasResponse) {
        this.listAWSDefaultServiceQuotasResponse = listAWSDefaultServiceQuotasResponse;
        return this;
    }
    public Object noSuchResourceException;
    public ListAwsDefaultServiceQuotasResponse withNoSuchResourceException(Object noSuchResourceException) {
        this.noSuchResourceException = noSuchResourceException;
        return this;
    }
    public Object serviceException;
    public ListAwsDefaultServiceQuotasResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Long statusCode;
    public ListAwsDefaultServiceQuotasResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public ListAwsDefaultServiceQuotasResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}