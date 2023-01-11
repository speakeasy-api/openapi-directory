package openapisdk.models.operations;



public class GetUsersUserIdCipherUsesResponse {
    public String contentType;
    public GetUsersUserIdCipherUsesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetUsersUserIdCipherUsesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UserCipherUseEntity[] userCipherUseEntities;
    public GetUsersUserIdCipherUsesResponse withUserCipherUseEntities(openapisdk.models.shared.UserCipherUseEntity[] userCipherUseEntities) {
        this.userCipherUseEntities = userCipherUseEntities;
        return this;
    }
}