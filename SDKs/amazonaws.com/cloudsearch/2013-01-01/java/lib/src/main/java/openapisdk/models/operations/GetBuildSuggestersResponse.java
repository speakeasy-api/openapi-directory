package openapisdk.models.operations;



public class GetBuildSuggestersResponse {
    public byte[] body;
    public GetBuildSuggestersResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetBuildSuggestersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetBuildSuggestersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}