package openapisdk.models.operations;



public class GetUserCipherUsesResponse {
    public String contentType;
    public GetUserCipherUsesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetUserCipherUsesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UserCipherUseEntity[] userCipherUseEntities;
    public GetUserCipherUsesResponse withUserCipherUseEntities(openapisdk.models.shared.UserCipherUseEntity[] userCipherUseEntities) {
        this.userCipherUseEntities = userCipherUseEntities;
        return this;
    }
}