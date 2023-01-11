package openapisdk.models.operations;



public class CloneStackResponse {
    public openapisdk.models.shared.CloneStackResult cloneStackResult;
    public CloneStackResponse withCloneStackResult(openapisdk.models.shared.CloneStackResult cloneStackResult) {
        this.cloneStackResult = cloneStackResult;
        return this;
    }
    public String contentType;
    public CloneStackResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object resourceNotFoundException;
    public CloneStackResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public CloneStackResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public CloneStackResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}