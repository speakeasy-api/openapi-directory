package openapisdk.models.operations;



public class AddUserResponse {
    public String contentType;
    public AddUserResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AddUserResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UserResponse userResponse;
    public AddUserResponse withUserResponse(openapisdk.models.shared.UserResponse userResponse) {
        this.userResponse = userResponse;
        return this;
    }
}