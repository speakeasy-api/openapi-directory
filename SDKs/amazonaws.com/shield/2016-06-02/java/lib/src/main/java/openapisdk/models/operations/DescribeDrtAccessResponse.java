package openapisdk.models.operations;



public class DescribeDrtAccessResponse {
    public String contentType;
    public DescribeDrtAccessResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeDrtAccessResponse describeDRTAccessResponse;
    public DescribeDrtAccessResponse withDescribeDrtAccessResponse(openapisdk.models.shared.DescribeDrtAccessResponse describeDRTAccessResponse) {
        this.describeDRTAccessResponse = describeDRTAccessResponse;
        return this;
    }
    public Object internalErrorException;
    public DescribeDrtAccessResponse withInternalErrorException(Object internalErrorException) {
        this.internalErrorException = internalErrorException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeDrtAccessResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeDrtAccessResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}