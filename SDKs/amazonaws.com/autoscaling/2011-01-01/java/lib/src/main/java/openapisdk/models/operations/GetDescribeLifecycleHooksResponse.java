package openapisdk.models.operations;



public class GetDescribeLifecycleHooksResponse {
    public byte[] body;
    public GetDescribeLifecycleHooksResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetDescribeLifecycleHooksResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetDescribeLifecycleHooksResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}