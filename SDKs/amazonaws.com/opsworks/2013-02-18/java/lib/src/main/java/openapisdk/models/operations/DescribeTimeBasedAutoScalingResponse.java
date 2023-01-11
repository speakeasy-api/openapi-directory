package openapisdk.models.operations;



public class DescribeTimeBasedAutoScalingResponse {
    public String contentType;
    public DescribeTimeBasedAutoScalingResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeTimeBasedAutoScalingResult describeTimeBasedAutoScalingResult;
    public DescribeTimeBasedAutoScalingResponse withDescribeTimeBasedAutoScalingResult(openapisdk.models.shared.DescribeTimeBasedAutoScalingResult describeTimeBasedAutoScalingResult) {
        this.describeTimeBasedAutoScalingResult = describeTimeBasedAutoScalingResult;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeTimeBasedAutoScalingResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeTimeBasedAutoScalingResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public DescribeTimeBasedAutoScalingResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}