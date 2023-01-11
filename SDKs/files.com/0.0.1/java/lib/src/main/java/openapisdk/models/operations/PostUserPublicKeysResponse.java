package openapisdk.models.operations;



public class PostUserPublicKeysResponse {
    public String contentType;
    public PostUserPublicKeysResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PublicKeyEntity publicKeyEntity;
    public PostUserPublicKeysResponse withPublicKeyEntity(openapisdk.models.shared.PublicKeyEntity publicKeyEntity) {
        this.publicKeyEntity = publicKeyEntity;
        return this;
    }
    public Long statusCode;
    public PostUserPublicKeysResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}