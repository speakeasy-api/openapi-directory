package openapisdk.models.operations;



public class ListResponsePlansResponse {
    public Object accessDeniedException;
    public ListResponsePlansResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public ListResponsePlansResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public ListResponsePlansResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public openapisdk.models.shared.ListResponsePlansOutput listResponsePlansOutput;
    public ListResponsePlansResponse withListResponsePlansOutput(openapisdk.models.shared.ListResponsePlansOutput listResponsePlansOutput) {
        this.listResponsePlansOutput = listResponsePlansOutput;
        return this;
    }
    public Long statusCode;
    public ListResponsePlansResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListResponsePlansResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public ListResponsePlansResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}