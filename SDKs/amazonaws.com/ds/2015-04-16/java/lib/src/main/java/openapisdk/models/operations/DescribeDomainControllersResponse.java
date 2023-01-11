package openapisdk.models.operations;



public class DescribeDomainControllersResponse {
    public Object clientException;
    public DescribeDomainControllersResponse withClientException(Object clientException) {
        this.clientException = clientException;
        return this;
    }
    public String contentType;
    public DescribeDomainControllersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeDomainControllersResult describeDomainControllersResult;
    public DescribeDomainControllersResponse withDescribeDomainControllersResult(openapisdk.models.shared.DescribeDomainControllersResult describeDomainControllersResult) {
        this.describeDomainControllersResult = describeDomainControllersResult;
        return this;
    }
    public Object entityDoesNotExistException;
    public DescribeDomainControllersResponse withEntityDoesNotExistException(Object entityDoesNotExistException) {
        this.entityDoesNotExistException = entityDoesNotExistException;
        return this;
    }
    public Object invalidNextTokenException;
    public DescribeDomainControllersResponse withInvalidNextTokenException(Object invalidNextTokenException) {
        this.invalidNextTokenException = invalidNextTokenException;
        return this;
    }
    public Object invalidParameterException;
    public DescribeDomainControllersResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object serviceException;
    public DescribeDomainControllersResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Long statusCode;
    public DescribeDomainControllersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unsupportedOperationException;
    public DescribeDomainControllersResponse withUnsupportedOperationException(Object unsupportedOperationException) {
        this.unsupportedOperationException = unsupportedOperationException;
        return this;
    }
}