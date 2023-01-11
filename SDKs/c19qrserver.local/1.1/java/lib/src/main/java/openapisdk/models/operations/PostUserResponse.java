package openapisdk.models.operations;



public class PostUserResponse {
    public String contentType;
    public PostUserResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostUserResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.CreateUserResponse createUserResponse;
    public PostUserResponse withCreateUserResponse(openapisdk.models.shared.CreateUserResponse createUserResponse) {
        this.createUserResponse = createUserResponse;
        return this;
    }
    public openapisdk.models.shared.InvalidToken invalidToken;
    public PostUserResponse withInvalidToken(openapisdk.models.shared.InvalidToken invalidToken) {
        this.invalidToken = invalidToken;
        return this;
    }
}