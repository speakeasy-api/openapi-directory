package openapisdk.models.operations;



public class DeleteGroupResponse {
    public Object badRequestException;
    public DeleteGroupResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public DeleteGroupResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deleteGroupResponse;
    public DeleteGroupResponse withDeleteGroupResponse(java.util.Map<String, Object> deleteGroupResponse) {
        this.deleteGroupResponse = deleteGroupResponse;
        return this;
    }
    public Long statusCode;
    public DeleteGroupResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}