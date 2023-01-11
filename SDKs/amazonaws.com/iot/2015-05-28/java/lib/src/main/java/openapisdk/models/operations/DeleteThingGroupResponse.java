package openapisdk.models.operations;



public class DeleteThingGroupResponse {
    public String contentType;
    public DeleteThingGroupResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deleteThingGroupResponse;
    public DeleteThingGroupResponse withDeleteThingGroupResponse(java.util.Map<String, Object> deleteThingGroupResponse) {
        this.deleteThingGroupResponse = deleteThingGroupResponse;
        return this;
    }
    public Object internalFailureException;
    public DeleteThingGroupResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public DeleteThingGroupResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Long statusCode;
    public DeleteThingGroupResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DeleteThingGroupResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object versionConflictException;
    public DeleteThingGroupResponse withVersionConflictException(Object versionConflictException) {
        this.versionConflictException = versionConflictException;
        return this;
    }
}