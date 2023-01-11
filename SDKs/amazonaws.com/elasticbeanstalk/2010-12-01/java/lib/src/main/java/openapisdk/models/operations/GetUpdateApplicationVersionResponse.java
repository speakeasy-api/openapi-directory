package openapisdk.models.operations;



public class GetUpdateApplicationVersionResponse {
    public byte[] body;
    public GetUpdateApplicationVersionResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetUpdateApplicationVersionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetUpdateApplicationVersionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}