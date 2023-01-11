package openapisdk.models.operations;



public class GetCancelExportTaskResponse {
    public byte[] body;
    public GetCancelExportTaskResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetCancelExportTaskResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetCancelExportTaskResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}