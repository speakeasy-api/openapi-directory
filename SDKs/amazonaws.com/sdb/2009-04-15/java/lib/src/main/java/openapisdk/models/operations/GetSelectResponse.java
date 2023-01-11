package openapisdk.models.operations;



public class GetSelectResponse {
    public byte[] body;
    public GetSelectResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetSelectResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetSelectResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}