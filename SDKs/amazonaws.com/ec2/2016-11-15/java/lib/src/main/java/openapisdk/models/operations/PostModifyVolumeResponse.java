package openapisdk.models.operations;



public class PostModifyVolumeResponse {
    public byte[] body;
    public PostModifyVolumeResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostModifyVolumeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostModifyVolumeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}