package openapisdk.models.operations;



public class PostModifyInstancePlacementResponse {
    public byte[] body;
    public PostModifyInstancePlacementResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostModifyInstancePlacementResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostModifyInstancePlacementResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}