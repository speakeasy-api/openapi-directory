package openapisdk.models.operations;



public class PatchGroupUsersIdResponse {
    public String contentType;
    public PatchGroupUsersIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GroupUserEntity groupUserEntity;
    public PatchGroupUsersIdResponse withGroupUserEntity(openapisdk.models.shared.GroupUserEntity groupUserEntity) {
        this.groupUserEntity = groupUserEntity;
        return this;
    }
    public Long statusCode;
    public PatchGroupUsersIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}