package openapisdk.models.operations;



public class DescribeJobResponse {
    public String contentType;
    public DescribeJobResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GlacierJobDescription glacierJobDescription;
    public DescribeJobResponse withGlacierJobDescription(openapisdk.models.shared.GlacierJobDescription glacierJobDescription) {
        this.glacierJobDescription = glacierJobDescription;
        return this;
    }
    public Object invalidParameterValueException;
    public DescribeJobResponse withInvalidParameterValueException(Object invalidParameterValueException) {
        this.invalidParameterValueException = invalidParameterValueException;
        return this;
    }
    public Object missingParameterValueException;
    public DescribeJobResponse withMissingParameterValueException(Object missingParameterValueException) {
        this.missingParameterValueException = missingParameterValueException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeJobResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceUnavailableException;
    public DescribeJobResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public DescribeJobResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}