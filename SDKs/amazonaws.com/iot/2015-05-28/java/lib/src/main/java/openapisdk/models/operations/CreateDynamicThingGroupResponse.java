package openapisdk.models.operations;



public class CreateDynamicThingGroupResponse {
    public String contentType;
    public CreateDynamicThingGroupResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateDynamicThingGroupResponse createDynamicThingGroupResponse;
    public CreateDynamicThingGroupResponse withCreateDynamicThingGroupResponse(openapisdk.models.shared.CreateDynamicThingGroupResponse createDynamicThingGroupResponse) {
        this.createDynamicThingGroupResponse = createDynamicThingGroupResponse;
        return this;
    }
    public Object internalFailureException;
    public CreateDynamicThingGroupResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidQueryException;
    public CreateDynamicThingGroupResponse withInvalidQueryException(Object invalidQueryException) {
        this.invalidQueryException = invalidQueryException;
        return this;
    }
    public Object invalidRequestException;
    public CreateDynamicThingGroupResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object limitExceededException;
    public CreateDynamicThingGroupResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object resourceAlreadyExistsException;
    public CreateDynamicThingGroupResponse withResourceAlreadyExistsException(Object resourceAlreadyExistsException) {
        this.resourceAlreadyExistsException = resourceAlreadyExistsException;
        return this;
    }
    public Object resourceNotFoundException;
    public CreateDynamicThingGroupResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public CreateDynamicThingGroupResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public CreateDynamicThingGroupResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}