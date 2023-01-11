package openapisdk.models.operations;



public class DescribeImagesResponse {
    public String contentType;
    public DescribeImagesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeImagesResult describeImagesResult;
    public DescribeImagesResponse withDescribeImagesResult(openapisdk.models.shared.DescribeImagesResult describeImagesResult) {
        this.describeImagesResult = describeImagesResult;
        return this;
    }
    public Object invalidParameterCombinationException;
    public DescribeImagesResponse withInvalidParameterCombinationException(Object invalidParameterCombinationException) {
        this.invalidParameterCombinationException = invalidParameterCombinationException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeImagesResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeImagesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}