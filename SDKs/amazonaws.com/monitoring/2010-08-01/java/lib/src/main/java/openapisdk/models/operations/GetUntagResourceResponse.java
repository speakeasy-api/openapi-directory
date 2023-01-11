package openapisdk.models.operations;



public class GetUntagResourceResponse {
    public byte[] body;
    public GetUntagResourceResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetUntagResourceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetUntagResourceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}