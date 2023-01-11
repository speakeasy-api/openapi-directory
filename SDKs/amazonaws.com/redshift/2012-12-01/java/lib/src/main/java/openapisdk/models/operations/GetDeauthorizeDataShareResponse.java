package openapisdk.models.operations;



public class GetDeauthorizeDataShareResponse {
    public byte[] body;
    public GetDeauthorizeDataShareResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetDeauthorizeDataShareResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetDeauthorizeDataShareResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}