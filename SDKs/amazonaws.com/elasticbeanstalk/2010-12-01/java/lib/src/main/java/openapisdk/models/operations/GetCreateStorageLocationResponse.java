package openapisdk.models.operations;



public class GetCreateStorageLocationResponse {
    public byte[] body;
    public GetCreateStorageLocationResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetCreateStorageLocationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetCreateStorageLocationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}