package openapisdk.models.operations;



public class ReposGetContentResponse {
    public byte[] body;
    public ReposGetContentResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public ReposGetContentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ReposGetContentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public ReposGetContentResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public Object reposGetContent200ApplicationJSONOneOf;
    public ReposGetContentResponse withReposGetContent200ApplicationJsonOneOf(Object reposGetContent200ApplicationJSONOneOf) {
        this.reposGetContent200ApplicationJSONOneOf = reposGetContent200ApplicationJSONOneOf;
        return this;
    }
}