package openapisdk.models.operations;



public class AssociateResourceResponse {
    public openapisdk.models.shared.AssociateResourceResponse associateResourceResponse;
    public AssociateResourceResponse withAssociateResourceResponse(openapisdk.models.shared.AssociateResourceResponse associateResourceResponse) {
        this.associateResourceResponse = associateResourceResponse;
        return this;
    }
    public Object conflictException;
    public AssociateResourceResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public AssociateResourceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public AssociateResourceResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public AssociateResourceResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceQuotaExceededException;
    public AssociateResourceResponse withServiceQuotaExceededException(Object serviceQuotaExceededException) {
        this.serviceQuotaExceededException = serviceQuotaExceededException;
        return this;
    }
    public Long statusCode;
    public AssociateResourceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}