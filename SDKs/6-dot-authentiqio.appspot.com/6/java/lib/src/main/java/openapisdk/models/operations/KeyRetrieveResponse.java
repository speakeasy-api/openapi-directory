package openapisdk.models.operations;



public class KeyRetrieveResponse {
    public byte[] body;
    public KeyRetrieveResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public KeyRetrieveResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object error;
    public KeyRetrieveResponse withError(Object error) {
        this.error = error;
        return this;
    }
    public KeyRetrieveJwt jwt;
    public KeyRetrieveResponse withJwt(KeyRetrieveJwt jwt) {
        this.jwt = jwt;
        return this;
    }
    public Long statusCode;
    public KeyRetrieveResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}