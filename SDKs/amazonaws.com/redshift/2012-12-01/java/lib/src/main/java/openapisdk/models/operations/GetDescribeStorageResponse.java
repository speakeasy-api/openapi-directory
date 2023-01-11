package openapisdk.models.operations;



public class GetDescribeStorageResponse {
    public byte[] body;
    public GetDescribeStorageResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetDescribeStorageResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetDescribeStorageResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}