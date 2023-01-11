package openapisdk.models.operations;



public class PostModifyFleetResponse {
    public byte[] body;
    public PostModifyFleetResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostModifyFleetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostModifyFleetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}