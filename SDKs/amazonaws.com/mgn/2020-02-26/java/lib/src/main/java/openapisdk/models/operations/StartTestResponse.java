package openapisdk.models.operations;



public class StartTestResponse {
    public Object conflictException;
    public StartTestResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public StartTestResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.StartTestResponse startTestResponse;
    public StartTestResponse withStartTestResponse(openapisdk.models.shared.StartTestResponse startTestResponse) {
        this.startTestResponse = startTestResponse;
        return this;
    }
    public Long statusCode;
    public StartTestResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object uninitializedAccountException;
    public StartTestResponse withUninitializedAccountException(Object uninitializedAccountException) {
        this.uninitializedAccountException = uninitializedAccountException;
        return this;
    }
    public Object validationException;
    public StartTestResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}