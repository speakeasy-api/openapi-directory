package openapisdk.models.operations;



public class SignRetrieveResponse {
    public byte[] body;
    public SignRetrieveResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public SignRetrieveResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object error;
    public SignRetrieveResponse withError(Object error) {
        this.error = error;
        return this;
    }
    public SignRetrieveJwt jwt;
    public SignRetrieveResponse withJwt(SignRetrieveJwt jwt) {
        this.jwt = jwt;
        return this;
    }
    public Long statusCode;
    public SignRetrieveResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}