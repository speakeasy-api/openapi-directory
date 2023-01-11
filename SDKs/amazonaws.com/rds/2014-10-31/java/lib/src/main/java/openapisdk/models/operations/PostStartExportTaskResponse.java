package openapisdk.models.operations;



public class PostStartExportTaskResponse {
    public byte[] body;
    public PostStartExportTaskResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostStartExportTaskResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostStartExportTaskResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}