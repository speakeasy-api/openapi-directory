package openapisdk.models.operations;



public class AssociateEntityToThingResponse {
    public java.util.Map<String, Object> associateEntityToThingResponse;
    public AssociateEntityToThingResponse withAssociateEntityToThingResponse(java.util.Map<String, Object> associateEntityToThingResponse) {
        this.associateEntityToThingResponse = associateEntityToThingResponse;
        return this;
    }
    public String contentType;
    public AssociateEntityToThingResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalFailureException;
    public AssociateEntityToThingResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public AssociateEntityToThingResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceNotFoundException;
    public AssociateEntityToThingResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public AssociateEntityToThingResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public AssociateEntityToThingResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}