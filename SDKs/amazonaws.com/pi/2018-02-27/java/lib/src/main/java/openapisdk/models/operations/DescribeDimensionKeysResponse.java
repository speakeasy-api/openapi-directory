package openapisdk.models.operations;



public class DescribeDimensionKeysResponse {
    public String contentType;
    public DescribeDimensionKeysResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeDimensionKeysResponse describeDimensionKeysResponse;
    public DescribeDimensionKeysResponse withDescribeDimensionKeysResponse(openapisdk.models.shared.DescribeDimensionKeysResponse describeDimensionKeysResponse) {
        this.describeDimensionKeysResponse = describeDimensionKeysResponse;
        return this;
    }
    public Object internalServiceError;
    public DescribeDimensionKeysResponse withInternalServiceError(Object internalServiceError) {
        this.internalServiceError = internalServiceError;
        return this;
    }
    public Object invalidArgumentException;
    public DescribeDimensionKeysResponse withInvalidArgumentException(Object invalidArgumentException) {
        this.invalidArgumentException = invalidArgumentException;
        return this;
    }
    public Object notAuthorizedException;
    public DescribeDimensionKeysResponse withNotAuthorizedException(Object notAuthorizedException) {
        this.notAuthorizedException = notAuthorizedException;
        return this;
    }
    public Long statusCode;
    public DescribeDimensionKeysResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}