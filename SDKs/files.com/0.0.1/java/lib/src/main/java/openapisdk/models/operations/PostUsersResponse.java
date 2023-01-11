package openapisdk.models.operations;



public class PostUsersResponse {
    public String contentType;
    public PostUsersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostUsersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UserEntity userEntity;
    public PostUsersResponse withUserEntity(openapisdk.models.shared.UserEntity userEntity) {
        this.userEntity = userEntity;
        return this;
    }
}