package openapisdk.models.operations;



public class PatchUsersIdResponse {
    public String contentType;
    public PatchUsersIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PatchUsersIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UserEntity userEntity;
    public PatchUsersIdResponse withUserEntity(openapisdk.models.shared.UserEntity userEntity) {
        this.userEntity = userEntity;
        return this;
    }
}