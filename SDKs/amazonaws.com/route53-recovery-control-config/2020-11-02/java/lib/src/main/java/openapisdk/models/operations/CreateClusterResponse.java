package openapisdk.models.operations;



public class CreateClusterResponse {
    public Object accessDeniedException;
    public CreateClusterResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object conflictException;
    public CreateClusterResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public CreateClusterResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateClusterResponse createClusterResponse;
    public CreateClusterResponse withCreateClusterResponse(openapisdk.models.shared.CreateClusterResponse createClusterResponse) {
        this.createClusterResponse = createClusterResponse;
        return this;
    }
    public Object internalServerException;
    public CreateClusterResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public CreateClusterResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceQuotaExceededException;
    public CreateClusterResponse withServiceQuotaExceededException(Object serviceQuotaExceededException) {
        this.serviceQuotaExceededException = serviceQuotaExceededException;
        return this;
    }
    public Long statusCode;
    public CreateClusterResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public CreateClusterResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public CreateClusterResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}