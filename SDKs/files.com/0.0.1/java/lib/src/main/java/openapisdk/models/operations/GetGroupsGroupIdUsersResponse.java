package openapisdk.models.operations;



public class GetGroupsGroupIdUsersResponse {
    public String contentType;
    public GetGroupsGroupIdUsersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GroupUserEntity[] groupUserEntities;
    public GetGroupsGroupIdUsersResponse withGroupUserEntities(openapisdk.models.shared.GroupUserEntity[] groupUserEntities) {
        this.groupUserEntities = groupUserEntities;
        return this;
    }
    public Long statusCode;
    public GetGroupsGroupIdUsersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}