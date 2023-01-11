package openapisdk.models.operations;



public class DescribeDeliveryChannelStatusResponse {
    public String contentType;
    public DescribeDeliveryChannelStatusResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeDeliveryChannelStatusResponse describeDeliveryChannelStatusResponse;
    public DescribeDeliveryChannelStatusResponse withDescribeDeliveryChannelStatusResponse(openapisdk.models.shared.DescribeDeliveryChannelStatusResponse describeDeliveryChannelStatusResponse) {
        this.describeDeliveryChannelStatusResponse = describeDeliveryChannelStatusResponse;
        return this;
    }
    public Object noSuchDeliveryChannelException;
    public DescribeDeliveryChannelStatusResponse withNoSuchDeliveryChannelException(Object noSuchDeliveryChannelException) {
        this.noSuchDeliveryChannelException = noSuchDeliveryChannelException;
        return this;
    }
    public Long statusCode;
    public DescribeDeliveryChannelStatusResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}