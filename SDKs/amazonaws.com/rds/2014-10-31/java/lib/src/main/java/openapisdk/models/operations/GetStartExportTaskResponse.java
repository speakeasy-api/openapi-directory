package openapisdk.models.operations;



public class GetStartExportTaskResponse {
    public byte[] body;
    public GetStartExportTaskResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetStartExportTaskResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetStartExportTaskResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}