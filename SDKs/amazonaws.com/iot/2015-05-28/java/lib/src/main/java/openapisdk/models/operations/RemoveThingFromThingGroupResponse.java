package openapisdk.models.operations;



public class RemoveThingFromThingGroupResponse {
    public String contentType;
    public RemoveThingFromThingGroupResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalFailureException;
    public RemoveThingFromThingGroupResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public RemoveThingFromThingGroupResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public java.util.Map<String, Object> removeThingFromThingGroupResponse;
    public RemoveThingFromThingGroupResponse withRemoveThingFromThingGroupResponse(java.util.Map<String, Object> removeThingFromThingGroupResponse) {
        this.removeThingFromThingGroupResponse = removeThingFromThingGroupResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public RemoveThingFromThingGroupResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public RemoveThingFromThingGroupResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public RemoveThingFromThingGroupResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}