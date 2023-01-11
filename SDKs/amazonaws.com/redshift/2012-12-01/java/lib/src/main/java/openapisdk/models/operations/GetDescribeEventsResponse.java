package openapisdk.models.operations;



public class GetDescribeEventsResponse {
    public byte[] body;
    public GetDescribeEventsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetDescribeEventsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetDescribeEventsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}