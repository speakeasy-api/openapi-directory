package openapisdk.models.operations;



public class AssociateSubnetsResponse {
    public openapisdk.models.shared.AssociateSubnetsResponse associateSubnetsResponse;
    public AssociateSubnetsResponse withAssociateSubnetsResponse(openapisdk.models.shared.AssociateSubnetsResponse associateSubnetsResponse) {
        this.associateSubnetsResponse = associateSubnetsResponse;
        return this;
    }
    public String contentType;
    public AssociateSubnetsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object insufficientCapacityException;
    public AssociateSubnetsResponse withInsufficientCapacityException(Object insufficientCapacityException) {
        this.insufficientCapacityException = insufficientCapacityException;
        return this;
    }
    public Object internalServerError;
    public AssociateSubnetsResponse withInternalServerError(Object internalServerError) {
        this.internalServerError = internalServerError;
        return this;
    }
    public Object invalidOperationException;
    public AssociateSubnetsResponse withInvalidOperationException(Object invalidOperationException) {
        this.invalidOperationException = invalidOperationException;
        return this;
    }
    public Object invalidRequestException;
    public AssociateSubnetsResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object invalidTokenException;
    public AssociateSubnetsResponse withInvalidTokenException(Object invalidTokenException) {
        this.invalidTokenException = invalidTokenException;
        return this;
    }
    public Object resourceNotFoundException;
    public AssociateSubnetsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public AssociateSubnetsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public AssociateSubnetsResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}