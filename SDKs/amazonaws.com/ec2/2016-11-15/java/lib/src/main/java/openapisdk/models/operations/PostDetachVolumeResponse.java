package openapisdk.models.operations;



public class PostDetachVolumeResponse {
    public byte[] body;
    public PostDetachVolumeResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostDetachVolumeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostDetachVolumeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}