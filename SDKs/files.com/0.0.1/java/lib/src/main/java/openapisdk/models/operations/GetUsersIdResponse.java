package openapisdk.models.operations;



public class GetUsersIdResponse {
    public String contentType;
    public GetUsersIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetUsersIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UserEntity userEntity;
    public GetUsersIdResponse withUserEntity(openapisdk.models.shared.UserEntity userEntity) {
        this.userEntity = userEntity;
        return this;
    }
}