package openapisdk.models.operations;



public class DescribeComponentConfigurationResponse {
    public String contentType;
    public DescribeComponentConfigurationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeComponentConfigurationResponse describeComponentConfigurationResponse;
    public DescribeComponentConfigurationResponse withDescribeComponentConfigurationResponse(openapisdk.models.shared.DescribeComponentConfigurationResponse describeComponentConfigurationResponse) {
        this.describeComponentConfigurationResponse = describeComponentConfigurationResponse;
        return this;
    }
    public Object internalServerException;
    public DescribeComponentConfigurationResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeComponentConfigurationResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeComponentConfigurationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public DescribeComponentConfigurationResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}