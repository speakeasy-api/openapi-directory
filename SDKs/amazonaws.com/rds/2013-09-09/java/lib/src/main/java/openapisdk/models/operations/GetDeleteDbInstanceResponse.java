package openapisdk.models.operations;



public class GetDeleteDbInstanceResponse {
    public byte[] body;
    public GetDeleteDbInstanceResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetDeleteDbInstanceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetDeleteDbInstanceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}