package openapisdk.models.operations;



public class PostCreateFlowLogsResponse {
    public byte[] body;
    public PostCreateFlowLogsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostCreateFlowLogsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostCreateFlowLogsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}