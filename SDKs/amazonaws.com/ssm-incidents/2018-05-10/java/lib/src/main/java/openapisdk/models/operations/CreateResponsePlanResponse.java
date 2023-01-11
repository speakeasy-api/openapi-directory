package openapisdk.models.operations;



public class CreateResponsePlanResponse {
    public Object accessDeniedException;
    public CreateResponsePlanResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object conflictException;
    public CreateResponsePlanResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public CreateResponsePlanResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateResponsePlanOutput createResponsePlanOutput;
    public CreateResponsePlanResponse withCreateResponsePlanOutput(openapisdk.models.shared.CreateResponsePlanOutput createResponsePlanOutput) {
        this.createResponsePlanOutput = createResponsePlanOutput;
        return this;
    }
    public Object internalServerException;
    public CreateResponsePlanResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public CreateResponsePlanResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public CreateResponsePlanResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public CreateResponsePlanResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public CreateResponsePlanResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}