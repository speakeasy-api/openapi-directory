package openapisdk.models.operations;



public class CreateImportJobResponse {
    public Object badRequestException;
    public CreateImportJobResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public CreateImportJobResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateImportJobResponse createImportJobResponse;
    public CreateImportJobResponse withCreateImportJobResponse(openapisdk.models.shared.CreateImportJobResponse createImportJobResponse) {
        this.createImportJobResponse = createImportJobResponse;
        return this;
    }
    public Object limitExceededException;
    public CreateImportJobResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Long statusCode;
    public CreateImportJobResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public CreateImportJobResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}