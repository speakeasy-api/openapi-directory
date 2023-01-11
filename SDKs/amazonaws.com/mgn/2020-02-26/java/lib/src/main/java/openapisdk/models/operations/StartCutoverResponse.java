package openapisdk.models.operations;



public class StartCutoverResponse {
    public Object conflictException;
    public StartCutoverResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public StartCutoverResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.StartCutoverResponse startCutoverResponse;
    public StartCutoverResponse withStartCutoverResponse(openapisdk.models.shared.StartCutoverResponse startCutoverResponse) {
        this.startCutoverResponse = startCutoverResponse;
        return this;
    }
    public Long statusCode;
    public StartCutoverResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object uninitializedAccountException;
    public StartCutoverResponse withUninitializedAccountException(Object uninitializedAccountException) {
        this.uninitializedAccountException = uninitializedAccountException;
        return this;
    }
    public Object validationException;
    public StartCutoverResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}