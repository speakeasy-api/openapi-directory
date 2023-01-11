package openapisdk.models.operations;



public class GetCancelImportTaskResponse {
    public byte[] body;
    public GetCancelImportTaskResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetCancelImportTaskResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetCancelImportTaskResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}