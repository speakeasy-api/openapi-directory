package openapisdk.models.operations;



public class GetUserRequestsResponse {
    public String contentType;
    public GetUserRequestsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetUserRequestsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UserRequestEntity[] userRequestEntities;
    public GetUserRequestsResponse withUserRequestEntities(openapisdk.models.shared.UserRequestEntity[] userRequestEntities) {
        this.userRequestEntities = userRequestEntities;
        return this;
    }
}