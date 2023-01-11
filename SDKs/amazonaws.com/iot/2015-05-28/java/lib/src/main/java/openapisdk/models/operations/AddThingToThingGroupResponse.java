package openapisdk.models.operations;



public class AddThingToThingGroupResponse {
    public java.util.Map<String, Object> addThingToThingGroupResponse;
    public AddThingToThingGroupResponse withAddThingToThingGroupResponse(java.util.Map<String, Object> addThingToThingGroupResponse) {
        this.addThingToThingGroupResponse = addThingToThingGroupResponse;
        return this;
    }
    public String contentType;
    public AddThingToThingGroupResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalFailureException;
    public AddThingToThingGroupResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public AddThingToThingGroupResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceNotFoundException;
    public AddThingToThingGroupResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public AddThingToThingGroupResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public AddThingToThingGroupResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}