package openapisdk.models.operations;



public class GetExitStandbyResponse {
    public byte[] body;
    public GetExitStandbyResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetExitStandbyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetExitStandbyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}