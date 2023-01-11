package openapisdk.models.operations;



public class CreateGroupResponse {
    public Object badRequestException;
    public CreateGroupResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public CreateGroupResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateGroupResponse createGroupResponse;
    public CreateGroupResponse withCreateGroupResponse(openapisdk.models.shared.CreateGroupResponse createGroupResponse) {
        this.createGroupResponse = createGroupResponse;
        return this;
    }
    public Long statusCode;
    public CreateGroupResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}