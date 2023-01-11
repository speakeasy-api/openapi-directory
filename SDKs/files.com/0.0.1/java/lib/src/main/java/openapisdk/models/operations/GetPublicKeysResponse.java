package openapisdk.models.operations;



public class GetPublicKeysResponse {
    public String contentType;
    public GetPublicKeysResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PublicKeyEntity[] publicKeyEntities;
    public GetPublicKeysResponse withPublicKeyEntities(openapisdk.models.shared.PublicKeyEntity[] publicKeyEntities) {
        this.publicKeyEntities = publicKeyEntities;
        return this;
    }
    public Long statusCode;
    public GetPublicKeysResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}