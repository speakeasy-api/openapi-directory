package openapisdk.models.operations;



public class GetPublicKeysIdResponse {
    public String contentType;
    public GetPublicKeysIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PublicKeyEntity publicKeyEntity;
    public GetPublicKeysIdResponse withPublicKeyEntity(openapisdk.models.shared.PublicKeyEntity publicKeyEntity) {
        this.publicKeyEntity = publicKeyEntity;
        return this;
    }
    public Long statusCode;
    public GetPublicKeysIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}