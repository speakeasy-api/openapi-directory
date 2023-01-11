package openapisdk.models.operations;



public class GetCancelResizeResponse {
    public byte[] body;
    public GetCancelResizeResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetCancelResizeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetCancelResizeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}