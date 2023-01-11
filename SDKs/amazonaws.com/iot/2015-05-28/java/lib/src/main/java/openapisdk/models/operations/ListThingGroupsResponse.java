package openapisdk.models.operations;



public class ListThingGroupsResponse {
    public String contentType;
    public ListThingGroupsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalFailureException;
    public ListThingGroupsResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public ListThingGroupsResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public openapisdk.models.shared.ListThingGroupsResponse listThingGroupsResponse;
    public ListThingGroupsResponse withListThingGroupsResponse(openapisdk.models.shared.ListThingGroupsResponse listThingGroupsResponse) {
        this.listThingGroupsResponse = listThingGroupsResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public ListThingGroupsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public ListThingGroupsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListThingGroupsResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}