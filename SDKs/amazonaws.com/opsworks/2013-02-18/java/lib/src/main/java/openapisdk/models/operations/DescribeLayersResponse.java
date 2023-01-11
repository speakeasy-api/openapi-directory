package openapisdk.models.operations;



public class DescribeLayersResponse {
    public String contentType;
    public DescribeLayersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeLayersResult describeLayersResult;
    public DescribeLayersResponse withDescribeLayersResult(openapisdk.models.shared.DescribeLayersResult describeLayersResult) {
        this.describeLayersResult = describeLayersResult;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeLayersResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeLayersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public DescribeLayersResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}