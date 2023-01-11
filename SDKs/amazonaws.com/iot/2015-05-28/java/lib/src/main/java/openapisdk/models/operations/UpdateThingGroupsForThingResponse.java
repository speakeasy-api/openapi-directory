package openapisdk.models.operations;



public class UpdateThingGroupsForThingResponse {
    public String contentType;
    public UpdateThingGroupsForThingResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalFailureException;
    public UpdateThingGroupsForThingResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public UpdateThingGroupsForThingResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceNotFoundException;
    public UpdateThingGroupsForThingResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public UpdateThingGroupsForThingResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public UpdateThingGroupsForThingResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public java.util.Map<String, Object> updateThingGroupsForThingResponse;
    public UpdateThingGroupsForThingResponse withUpdateThingGroupsForThingResponse(java.util.Map<String, Object> updateThingGroupsForThingResponse) {
        this.updateThingGroupsForThingResponse = updateThingGroupsForThingResponse;
        return this;
    }
}