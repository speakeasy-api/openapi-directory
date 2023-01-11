package openapisdk.models.operations;



public class PostCancelImportTaskResponse {
    public byte[] body;
    public PostCancelImportTaskResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostCancelImportTaskResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostCancelImportTaskResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}