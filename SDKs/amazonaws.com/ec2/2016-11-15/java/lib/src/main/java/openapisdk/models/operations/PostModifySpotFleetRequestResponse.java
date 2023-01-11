package openapisdk.models.operations;



public class PostModifySpotFleetRequestResponse {
    public byte[] body;
    public PostModifySpotFleetRequestResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostModifySpotFleetRequestResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostModifySpotFleetRequestResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}