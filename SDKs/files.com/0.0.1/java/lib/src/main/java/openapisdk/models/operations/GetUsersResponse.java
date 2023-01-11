package openapisdk.models.operations;



public class GetUsersResponse {
    public String contentType;
    public GetUsersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetUsersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UserEntity[] userEntities;
    public GetUsersResponse withUserEntities(openapisdk.models.shared.UserEntity[] userEntities) {
        this.userEntities = userEntities;
        return this;
    }
}