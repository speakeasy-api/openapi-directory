package openapisdk.models.operations;



public class DescribeDeliveryChannelsResponse {
    public String contentType;
    public DescribeDeliveryChannelsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeDeliveryChannelsResponse describeDeliveryChannelsResponse;
    public DescribeDeliveryChannelsResponse withDescribeDeliveryChannelsResponse(openapisdk.models.shared.DescribeDeliveryChannelsResponse describeDeliveryChannelsResponse) {
        this.describeDeliveryChannelsResponse = describeDeliveryChannelsResponse;
        return this;
    }
    public Object noSuchDeliveryChannelException;
    public DescribeDeliveryChannelsResponse withNoSuchDeliveryChannelException(Object noSuchDeliveryChannelException) {
        this.noSuchDeliveryChannelException = noSuchDeliveryChannelException;
        return this;
    }
    public Long statusCode;
    public DescribeDeliveryChannelsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}