package openapisdk.models.operations;



public class ListPolicyGenerationsResponse {
    public Object accessDeniedException;
    public ListPolicyGenerationsResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public ListPolicyGenerationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public ListPolicyGenerationsResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public openapisdk.models.shared.ListPolicyGenerationsResponse listPolicyGenerationsResponse;
    public ListPolicyGenerationsResponse withListPolicyGenerationsResponse(openapisdk.models.shared.ListPolicyGenerationsResponse listPolicyGenerationsResponse) {
        this.listPolicyGenerationsResponse = listPolicyGenerationsResponse;
        return this;
    }
    public Long statusCode;
    public ListPolicyGenerationsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListPolicyGenerationsResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public ListPolicyGenerationsResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}