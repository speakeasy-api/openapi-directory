package openapisdk.models.operations;



public class ListThingGroupsForThingResponse {
    public String contentType;
    public ListThingGroupsForThingResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalFailureException;
    public ListThingGroupsForThingResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public ListThingGroupsForThingResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public openapisdk.models.shared.ListThingGroupsForThingResponse listThingGroupsForThingResponse;
    public ListThingGroupsForThingResponse withListThingGroupsForThingResponse(openapisdk.models.shared.ListThingGroupsForThingResponse listThingGroupsForThingResponse) {
        this.listThingGroupsForThingResponse = listThingGroupsForThingResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public ListThingGroupsForThingResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public ListThingGroupsForThingResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListThingGroupsForThingResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}