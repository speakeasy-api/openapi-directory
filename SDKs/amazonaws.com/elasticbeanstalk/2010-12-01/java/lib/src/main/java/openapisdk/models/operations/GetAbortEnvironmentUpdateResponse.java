package openapisdk.models.operations;



public class GetAbortEnvironmentUpdateResponse {
    public byte[] body;
    public GetAbortEnvironmentUpdateResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetAbortEnvironmentUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetAbortEnvironmentUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}