package openapisdk.models.operations;



public class GetUserGroupsResponse {
    public String contentType;
    public GetUserGroupsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GroupUserEntity[] groupUserEntities;
    public GetUserGroupsResponse withGroupUserEntities(openapisdk.models.shared.GroupUserEntity[] groupUserEntities) {
        this.groupUserEntities = groupUserEntities;
        return this;
    }
    public Long statusCode;
    public GetUserGroupsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}