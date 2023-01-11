package openapisdk.models.operations;



public class GetDescribeEnvironmentHealthResponse {
    public byte[] body;
    public GetDescribeEnvironmentHealthResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetDescribeEnvironmentHealthResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetDescribeEnvironmentHealthResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}