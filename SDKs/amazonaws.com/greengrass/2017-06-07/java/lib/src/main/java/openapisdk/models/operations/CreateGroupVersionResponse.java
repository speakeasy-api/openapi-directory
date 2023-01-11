package openapisdk.models.operations;



public class CreateGroupVersionResponse {
    public Object badRequestException;
    public CreateGroupVersionResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public CreateGroupVersionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateGroupVersionResponse createGroupVersionResponse;
    public CreateGroupVersionResponse withCreateGroupVersionResponse(openapisdk.models.shared.CreateGroupVersionResponse createGroupVersionResponse) {
        this.createGroupVersionResponse = createGroupVersionResponse;
        return this;
    }
    public Long statusCode;
    public CreateGroupVersionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}