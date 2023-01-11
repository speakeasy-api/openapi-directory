package openapisdk.models.operations;



public class PatchGroupsGroupIdMembershipsUserIdResponse {
    public String contentType;
    public PatchGroupsGroupIdMembershipsUserIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GroupUserEntity groupUserEntity;
    public PatchGroupsGroupIdMembershipsUserIdResponse withGroupUserEntity(openapisdk.models.shared.GroupUserEntity groupUserEntity) {
        this.groupUserEntity = groupUserEntity;
        return this;
    }
    public Long statusCode;
    public PatchGroupsGroupIdMembershipsUserIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}