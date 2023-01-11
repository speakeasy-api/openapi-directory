package openapisdk.models.operations;



public class GetUserPublicKeysResponse {
    public String contentType;
    public GetUserPublicKeysResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PublicKeyEntity[] publicKeyEntities;
    public GetUserPublicKeysResponse withPublicKeyEntities(openapisdk.models.shared.PublicKeyEntity[] publicKeyEntities) {
        this.publicKeyEntities = publicKeyEntities;
        return this;
    }
    public Long statusCode;
    public GetUserPublicKeysResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}