package openapisdk.models.operations;



public class GetMilestoneResponse {
    public Object accessDeniedException;
    public GetMilestoneResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public GetMilestoneResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetMilestoneOutput getMilestoneOutput;
    public GetMilestoneResponse withGetMilestoneOutput(openapisdk.models.shared.GetMilestoneOutput getMilestoneOutput) {
        this.getMilestoneOutput = getMilestoneOutput;
        return this;
    }
    public Object internalServerException;
    public GetMilestoneResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetMilestoneResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public GetMilestoneResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public GetMilestoneResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public GetMilestoneResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}