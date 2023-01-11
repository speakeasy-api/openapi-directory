package openapisdk.models.operations;



public class GetGroupUsersResponse {
    public String contentType;
    public GetGroupUsersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GroupUserEntity[] groupUserEntities;
    public GetGroupUsersResponse withGroupUserEntities(openapisdk.models.shared.GroupUserEntity[] groupUserEntities) {
        this.groupUserEntities = groupUserEntities;
        return this;
    }
    public Long statusCode;
    public GetGroupUsersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}