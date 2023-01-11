package openapisdk.models.operations;



public class GetResponsePlanResponse {
    public Object accessDeniedException;
    public GetResponsePlanResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public GetResponsePlanResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetResponsePlanOutput getResponsePlanOutput;
    public GetResponsePlanResponse withGetResponsePlanOutput(openapisdk.models.shared.GetResponsePlanOutput getResponsePlanOutput) {
        this.getResponsePlanOutput = getResponsePlanOutput;
        return this;
    }
    public Object internalServerException;
    public GetResponsePlanResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetResponsePlanResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public GetResponsePlanResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public GetResponsePlanResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public GetResponsePlanResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}