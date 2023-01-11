package openapisdk.models.operations;



public class GetDescribeEventSubscriptionsResponse {
    public byte[] body;
    public GetDescribeEventSubscriptionsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetDescribeEventSubscriptionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetDescribeEventSubscriptionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}