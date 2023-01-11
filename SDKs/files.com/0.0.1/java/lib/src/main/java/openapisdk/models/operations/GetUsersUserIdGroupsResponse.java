package openapisdk.models.operations;



public class GetUsersUserIdGroupsResponse {
    public String contentType;
    public GetUsersUserIdGroupsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GroupUserEntity[] groupUserEntities;
    public GetUsersUserIdGroupsResponse withGroupUserEntities(openapisdk.models.shared.GroupUserEntity[] groupUserEntities) {
        this.groupUserEntities = groupUserEntities;
        return this;
    }
    public Long statusCode;
    public GetUsersUserIdGroupsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}