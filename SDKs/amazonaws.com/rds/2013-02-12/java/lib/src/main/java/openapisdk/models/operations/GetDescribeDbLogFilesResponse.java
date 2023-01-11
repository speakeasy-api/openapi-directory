package openapisdk.models.operations;



public class GetDescribeDbLogFilesResponse {
    public byte[] body;
    public GetDescribeDbLogFilesResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetDescribeDbLogFilesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetDescribeDbLogFilesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}