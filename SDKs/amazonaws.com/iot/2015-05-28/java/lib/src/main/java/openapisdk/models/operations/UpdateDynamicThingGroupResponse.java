package openapisdk.models.operations;



public class UpdateDynamicThingGroupResponse {
    public String contentType;
    public UpdateDynamicThingGroupResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalFailureException;
    public UpdateDynamicThingGroupResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidQueryException;
    public UpdateDynamicThingGroupResponse withInvalidQueryException(Object invalidQueryException) {
        this.invalidQueryException = invalidQueryException;
        return this;
    }
    public Object invalidRequestException;
    public UpdateDynamicThingGroupResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceNotFoundException;
    public UpdateDynamicThingGroupResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public UpdateDynamicThingGroupResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public UpdateDynamicThingGroupResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public openapisdk.models.shared.UpdateDynamicThingGroupResponse updateDynamicThingGroupResponse;
    public UpdateDynamicThingGroupResponse withUpdateDynamicThingGroupResponse(openapisdk.models.shared.UpdateDynamicThingGroupResponse updateDynamicThingGroupResponse) {
        this.updateDynamicThingGroupResponse = updateDynamicThingGroupResponse;
        return this;
    }
    public Object versionConflictException;
    public UpdateDynamicThingGroupResponse withVersionConflictException(Object versionConflictException) {
        this.versionConflictException = versionConflictException;
        return this;
    }
}