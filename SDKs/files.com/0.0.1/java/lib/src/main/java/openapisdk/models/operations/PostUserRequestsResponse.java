package openapisdk.models.operations;



public class PostUserRequestsResponse {
    public String contentType;
    public PostUserRequestsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostUserRequestsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UserRequestEntity userRequestEntity;
    public PostUserRequestsResponse withUserRequestEntity(openapisdk.models.shared.UserRequestEntity userRequestEntity) {
        this.userRequestEntity = userRequestEntity;
        return this;
    }
}