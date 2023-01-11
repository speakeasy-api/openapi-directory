package openapisdk.models.operations;



public class ListEngagementsResponse {
    public Object accessDeniedException;
    public ListEngagementsResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public ListEngagementsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public ListEngagementsResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public openapisdk.models.shared.ListEngagementsResult listEngagementsResult;
    public ListEngagementsResponse withListEngagementsResult(openapisdk.models.shared.ListEngagementsResult listEngagementsResult) {
        this.listEngagementsResult = listEngagementsResult;
        return this;
    }
    public Long statusCode;
    public ListEngagementsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListEngagementsResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public ListEngagementsResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}