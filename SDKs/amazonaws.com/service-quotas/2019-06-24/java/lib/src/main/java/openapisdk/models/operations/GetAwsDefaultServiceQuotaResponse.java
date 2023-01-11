package openapisdk.models.operations;



public class GetAwsDefaultServiceQuotaResponse {
    public Object accessDeniedException;
    public GetAwsDefaultServiceQuotaResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public GetAwsDefaultServiceQuotaResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetAwsDefaultServiceQuotaResponse getAWSDefaultServiceQuotaResponse;
    public GetAwsDefaultServiceQuotaResponse withGetAwsDefaultServiceQuotaResponse(openapisdk.models.shared.GetAwsDefaultServiceQuotaResponse getAWSDefaultServiceQuotaResponse) {
        this.getAWSDefaultServiceQuotaResponse = getAWSDefaultServiceQuotaResponse;
        return this;
    }
    public Object illegalArgumentException;
    public GetAwsDefaultServiceQuotaResponse withIllegalArgumentException(Object illegalArgumentException) {
        this.illegalArgumentException = illegalArgumentException;
        return this;
    }
    public Object noSuchResourceException;
    public GetAwsDefaultServiceQuotaResponse withNoSuchResourceException(Object noSuchResourceException) {
        this.noSuchResourceException = noSuchResourceException;
        return this;
    }
    public Object serviceException;
    public GetAwsDefaultServiceQuotaResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Long statusCode;
    public GetAwsDefaultServiceQuotaResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public GetAwsDefaultServiceQuotaResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}