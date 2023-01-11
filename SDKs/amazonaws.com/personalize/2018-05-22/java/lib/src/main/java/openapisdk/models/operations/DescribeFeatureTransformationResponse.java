package openapisdk.models.operations;



public class DescribeFeatureTransformationResponse {
    public String contentType;
    public DescribeFeatureTransformationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeFeatureTransformationResponse describeFeatureTransformationResponse;
    public DescribeFeatureTransformationResponse withDescribeFeatureTransformationResponse(openapisdk.models.shared.DescribeFeatureTransformationResponse describeFeatureTransformationResponse) {
        this.describeFeatureTransformationResponse = describeFeatureTransformationResponse;
        return this;
    }
    public Object invalidInputException;
    public DescribeFeatureTransformationResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeFeatureTransformationResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeFeatureTransformationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}