package openapisdk.models.operations;



public class CreatePlacementResponse {
    public String contentType;
    public CreatePlacementResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> createPlacementResponse;
    public CreatePlacementResponse withCreatePlacementResponse(java.util.Map<String, Object> createPlacementResponse) {
        this.createPlacementResponse = createPlacementResponse;
        return this;
    }
    public Object internalFailureException;
    public CreatePlacementResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public CreatePlacementResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceConflictException;
    public CreatePlacementResponse withResourceConflictException(Object resourceConflictException) {
        this.resourceConflictException = resourceConflictException;
        return this;
    }
    public Object resourceNotFoundException;
    public CreatePlacementResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public CreatePlacementResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}