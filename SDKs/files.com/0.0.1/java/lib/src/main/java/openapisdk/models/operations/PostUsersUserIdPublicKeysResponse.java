package openapisdk.models.operations;



public class PostUsersUserIdPublicKeysResponse {
    public String contentType;
    public PostUsersUserIdPublicKeysResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PublicKeyEntity publicKeyEntity;
    public PostUsersUserIdPublicKeysResponse withPublicKeyEntity(openapisdk.models.shared.PublicKeyEntity publicKeyEntity) {
        this.publicKeyEntity = publicKeyEntity;
        return this;
    }
    public Long statusCode;
    public PostUsersUserIdPublicKeysResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}