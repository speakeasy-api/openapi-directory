package openapisdk.models.operations;



public class UpdateGroupResponse {
    public Object badRequestException;
    public UpdateGroupResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public UpdateGroupResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateGroupResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> updateGroupResponse;
    public UpdateGroupResponse withUpdateGroupResponse(java.util.Map<String, Object> updateGroupResponse) {
        this.updateGroupResponse = updateGroupResponse;
        return this;
    }
}