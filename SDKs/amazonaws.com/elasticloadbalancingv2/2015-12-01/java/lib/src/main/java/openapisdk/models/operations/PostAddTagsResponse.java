package openapisdk.models.operations;



public class PostAddTagsResponse {
    public byte[] body;
    public PostAddTagsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostAddTagsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostAddTagsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}