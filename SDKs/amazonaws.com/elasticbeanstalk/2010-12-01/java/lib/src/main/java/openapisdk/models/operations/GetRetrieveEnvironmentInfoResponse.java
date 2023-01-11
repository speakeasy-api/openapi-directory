package openapisdk.models.operations;



public class GetRetrieveEnvironmentInfoResponse {
    public byte[] body;
    public GetRetrieveEnvironmentInfoResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetRetrieveEnvironmentInfoResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetRetrieveEnvironmentInfoResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}