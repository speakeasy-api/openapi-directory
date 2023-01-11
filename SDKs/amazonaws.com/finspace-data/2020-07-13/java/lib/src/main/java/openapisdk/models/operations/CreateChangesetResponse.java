package openapisdk.models.operations;



public class CreateChangesetResponse {
    public Object accessDeniedException;
    public CreateChangesetResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public CreateChangesetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateChangesetResponse createChangesetResponse;
    public CreateChangesetResponse withCreateChangesetResponse(openapisdk.models.shared.CreateChangesetResponse createChangesetResponse) {
        this.createChangesetResponse = createChangesetResponse;
        return this;
    }
    public Object internalServerException;
    public CreateChangesetResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public CreateChangesetResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public CreateChangesetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public CreateChangesetResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public CreateChangesetResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}