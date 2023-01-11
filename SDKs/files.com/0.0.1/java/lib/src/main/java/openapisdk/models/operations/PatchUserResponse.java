package openapisdk.models.operations;



public class PatchUserResponse {
    public String contentType;
    public PatchUserResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PatchUserResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UserEntity userEntity;
    public PatchUserResponse withUserEntity(openapisdk.models.shared.UserEntity userEntity) {
        this.userEntity = userEntity;
        return this;
    }
}