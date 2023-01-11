package openapisdk.models.operations;



public class PostGroupUsersResponse {
    public String contentType;
    public PostGroupUsersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GroupUserEntity groupUserEntity;
    public PostGroupUsersResponse withGroupUserEntity(openapisdk.models.shared.GroupUserEntity groupUserEntity) {
        this.groupUserEntity = groupUserEntity;
        return this;
    }
    public Long statusCode;
    public PostGroupUsersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}