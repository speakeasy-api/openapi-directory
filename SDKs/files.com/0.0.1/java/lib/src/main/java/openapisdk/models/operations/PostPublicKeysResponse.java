package openapisdk.models.operations;



public class PostPublicKeysResponse {
    public String contentType;
    public PostPublicKeysResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PublicKeyEntity publicKeyEntity;
    public PostPublicKeysResponse withPublicKeyEntity(openapisdk.models.shared.PublicKeyEntity publicKeyEntity) {
        this.publicKeyEntity = publicKeyEntity;
        return this;
    }
    public Long statusCode;
    public PostPublicKeysResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}