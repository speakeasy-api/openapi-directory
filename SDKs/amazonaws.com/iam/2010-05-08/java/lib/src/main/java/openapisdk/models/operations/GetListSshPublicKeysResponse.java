package openapisdk.models.operations;



public class GetListSshPublicKeysResponse {
    public byte[] body;
    public GetListSshPublicKeysResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetListSshPublicKeysResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetListSshPublicKeysResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}