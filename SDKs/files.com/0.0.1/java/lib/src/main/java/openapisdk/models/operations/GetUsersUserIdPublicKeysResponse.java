package openapisdk.models.operations;



public class GetUsersUserIdPublicKeysResponse {
    public String contentType;
    public GetUsersUserIdPublicKeysResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PublicKeyEntity[] publicKeyEntities;
    public GetUsersUserIdPublicKeysResponse withPublicKeyEntities(openapisdk.models.shared.PublicKeyEntity[] publicKeyEntities) {
        this.publicKeyEntities = publicKeyEntities;
        return this;
    }
    public Long statusCode;
    public GetUsersUserIdPublicKeysResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}