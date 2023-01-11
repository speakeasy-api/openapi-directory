package openapisdk.models.operations;



public class PostDescribeSpotDatafeedSubscriptionResponse {
    public byte[] body;
    public PostDescribeSpotDatafeedSubscriptionResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostDescribeSpotDatafeedSubscriptionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostDescribeSpotDatafeedSubscriptionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}