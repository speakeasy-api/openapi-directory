package openapisdk.models.operations;



public class AssociateTargetsWithJobResponse {
    public openapisdk.models.shared.AssociateTargetsWithJobResponse associateTargetsWithJobResponse;
    public AssociateTargetsWithJobResponse withAssociateTargetsWithJobResponse(openapisdk.models.shared.AssociateTargetsWithJobResponse associateTargetsWithJobResponse) {
        this.associateTargetsWithJobResponse = associateTargetsWithJobResponse;
        return this;
    }
    public String contentType;
    public AssociateTargetsWithJobResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidRequestException;
    public AssociateTargetsWithJobResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object limitExceededException;
    public AssociateTargetsWithJobResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object resourceNotFoundException;
    public AssociateTargetsWithJobResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceUnavailableException;
    public AssociateTargetsWithJobResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public AssociateTargetsWithJobResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public AssociateTargetsWithJobResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}