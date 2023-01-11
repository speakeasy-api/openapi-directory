package openapisdk.models.operations;



public class GetUserRequestsIdResponse {
    public String contentType;
    public GetUserRequestsIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetUserRequestsIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UserRequestEntity userRequestEntity;
    public GetUserRequestsIdResponse withUserRequestEntity(openapisdk.models.shared.UserRequestEntity userRequestEntity) {
        this.userRequestEntity = userRequestEntity;
        return this;
    }
}