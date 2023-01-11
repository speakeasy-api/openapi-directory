package openapisdk.models.operations;



public class DeleteDynamicThingGroupResponse {
    public String contentType;
    public DeleteDynamicThingGroupResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deleteDynamicThingGroupResponse;
    public DeleteDynamicThingGroupResponse withDeleteDynamicThingGroupResponse(java.util.Map<String, Object> deleteDynamicThingGroupResponse) {
        this.deleteDynamicThingGroupResponse = deleteDynamicThingGroupResponse;
        return this;
    }
    public Object internalFailureException;
    public DeleteDynamicThingGroupResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public DeleteDynamicThingGroupResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Long statusCode;
    public DeleteDynamicThingGroupResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DeleteDynamicThingGroupResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object versionConflictException;
    public DeleteDynamicThingGroupResponse withVersionConflictException(Object versionConflictException) {
        this.versionConflictException = versionConflictException;
        return this;
    }
}