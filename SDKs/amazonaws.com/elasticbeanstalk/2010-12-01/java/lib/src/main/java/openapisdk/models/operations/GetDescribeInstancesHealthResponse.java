package openapisdk.models.operations;



public class GetDescribeInstancesHealthResponse {
    public byte[] body;
    public GetDescribeInstancesHealthResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetDescribeInstancesHealthResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetDescribeInstancesHealthResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}