package openapisdk.models.operations;



public class DescribeLoadBasedAutoScalingResponse {
    public String contentType;
    public DescribeLoadBasedAutoScalingResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeLoadBasedAutoScalingResult describeLoadBasedAutoScalingResult;
    public DescribeLoadBasedAutoScalingResponse withDescribeLoadBasedAutoScalingResult(openapisdk.models.shared.DescribeLoadBasedAutoScalingResult describeLoadBasedAutoScalingResult) {
        this.describeLoadBasedAutoScalingResult = describeLoadBasedAutoScalingResult;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeLoadBasedAutoScalingResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeLoadBasedAutoScalingResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public DescribeLoadBasedAutoScalingResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}