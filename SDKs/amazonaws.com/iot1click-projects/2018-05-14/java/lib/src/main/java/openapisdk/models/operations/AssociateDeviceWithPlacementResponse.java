package openapisdk.models.operations;



public class AssociateDeviceWithPlacementResponse {
    public java.util.Map<String, Object> associateDeviceWithPlacementResponse;
    public AssociateDeviceWithPlacementResponse withAssociateDeviceWithPlacementResponse(java.util.Map<String, Object> associateDeviceWithPlacementResponse) {
        this.associateDeviceWithPlacementResponse = associateDeviceWithPlacementResponse;
        return this;
    }
    public String contentType;
    public AssociateDeviceWithPlacementResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalFailureException;
    public AssociateDeviceWithPlacementResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public AssociateDeviceWithPlacementResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceConflictException;
    public AssociateDeviceWithPlacementResponse withResourceConflictException(Object resourceConflictException) {
        this.resourceConflictException = resourceConflictException;
        return this;
    }
    public Object resourceNotFoundException;
    public AssociateDeviceWithPlacementResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public AssociateDeviceWithPlacementResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}