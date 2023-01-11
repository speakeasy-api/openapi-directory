package openapisdk.models.operations;



public class ListThingsInThingGroupResponse {
    public String contentType;
    public ListThingsInThingGroupResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalFailureException;
    public ListThingsInThingGroupResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public ListThingsInThingGroupResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public openapisdk.models.shared.ListThingsInThingGroupResponse listThingsInThingGroupResponse;
    public ListThingsInThingGroupResponse withListThingsInThingGroupResponse(openapisdk.models.shared.ListThingsInThingGroupResponse listThingsInThingGroupResponse) {
        this.listThingsInThingGroupResponse = listThingsInThingGroupResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public ListThingsInThingGroupResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public ListThingsInThingGroupResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListThingsInThingGroupResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}