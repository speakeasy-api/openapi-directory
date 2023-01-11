package openapisdk.models.operations;



public class PostImportInstanceResponse {
    public byte[] body;
    public PostImportInstanceResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostImportInstanceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostImportInstanceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}