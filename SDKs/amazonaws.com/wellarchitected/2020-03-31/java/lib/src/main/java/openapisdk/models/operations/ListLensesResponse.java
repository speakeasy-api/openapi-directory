package openapisdk.models.operations;



public class ListLensesResponse {
    public Object accessDeniedException;
    public ListLensesResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public ListLensesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public ListLensesResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public openapisdk.models.shared.ListLensesOutput listLensesOutput;
    public ListLensesResponse withListLensesOutput(openapisdk.models.shared.ListLensesOutput listLensesOutput) {
        this.listLensesOutput = listLensesOutput;
        return this;
    }
    public Long statusCode;
    public ListLensesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListLensesResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public ListLensesResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}