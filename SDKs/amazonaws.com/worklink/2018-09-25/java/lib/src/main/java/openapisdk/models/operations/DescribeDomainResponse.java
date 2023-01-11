package openapisdk.models.operations;



public class DescribeDomainResponse {
    public String contentType;
    public DescribeDomainResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeDomainResponse describeDomainResponse;
    public DescribeDomainResponse withDescribeDomainResponse(openapisdk.models.shared.DescribeDomainResponse describeDomainResponse) {
        this.describeDomainResponse = describeDomainResponse;
        return this;
    }
    public Object internalServerErrorException;
    public DescribeDomainResponse withInternalServerErrorException(Object internalServerErrorException) {
        this.internalServerErrorException = internalServerErrorException;
        return this;
    }
    public Object invalidRequestException;
    public DescribeDomainResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeDomainResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeDomainResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public DescribeDomainResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
    public Object unauthorizedException;
    public DescribeDomainResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
}