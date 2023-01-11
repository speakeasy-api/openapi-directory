package openapisdk.models.operations;



public class PostGroupsGroupIdUsersResponse {
    public String contentType;
    public PostGroupsGroupIdUsersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostGroupsGroupIdUsersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UserEntity userEntity;
    public PostGroupsGroupIdUsersResponse withUserEntity(openapisdk.models.shared.UserEntity userEntity) {
        this.userEntity = userEntity;
        return this;
    }
}