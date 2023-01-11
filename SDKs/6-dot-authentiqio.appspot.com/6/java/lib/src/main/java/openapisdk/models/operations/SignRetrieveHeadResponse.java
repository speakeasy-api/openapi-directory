package openapisdk.models.operations;



public class SignRetrieveHeadResponse {
    public byte[] body;
    public SignRetrieveHeadResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public SignRetrieveHeadResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object error;
    public SignRetrieveHeadResponse withError(Object error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public SignRetrieveHeadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}