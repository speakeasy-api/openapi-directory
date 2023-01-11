package openapisdk.models.operations;



public class PatchPublicKeysIdResponse {
    public String contentType;
    public PatchPublicKeysIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PublicKeyEntity publicKeyEntity;
    public PatchPublicKeysIdResponse withPublicKeyEntity(openapisdk.models.shared.PublicKeyEntity publicKeyEntity) {
        this.publicKeyEntity = publicKeyEntity;
        return this;
    }
    public Long statusCode;
    public PatchPublicKeysIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}