package openapisdk.models.operations;



public class DissociateEntityFromThingResponse {
    public String contentType;
    public DissociateEntityFromThingResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> dissociateEntityFromThingResponse;
    public DissociateEntityFromThingResponse withDissociateEntityFromThingResponse(java.util.Map<String, Object> dissociateEntityFromThingResponse) {
        this.dissociateEntityFromThingResponse = dissociateEntityFromThingResponse;
        return this;
    }
    public Object internalFailureException;
    public DissociateEntityFromThingResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public DissociateEntityFromThingResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceNotFoundException;
    public DissociateEntityFromThingResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DissociateEntityFromThingResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DissociateEntityFromThingResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}