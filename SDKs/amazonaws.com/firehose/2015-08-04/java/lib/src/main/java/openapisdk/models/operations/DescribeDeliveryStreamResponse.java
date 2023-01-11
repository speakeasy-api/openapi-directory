package openapisdk.models.operations;



public class DescribeDeliveryStreamResponse {
    public String contentType;
    public DescribeDeliveryStreamResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeDeliveryStreamOutput describeDeliveryStreamOutput;
    public DescribeDeliveryStreamResponse withDescribeDeliveryStreamOutput(openapisdk.models.shared.DescribeDeliveryStreamOutput describeDeliveryStreamOutput) {
        this.describeDeliveryStreamOutput = describeDeliveryStreamOutput;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeDeliveryStreamResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeDeliveryStreamResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}