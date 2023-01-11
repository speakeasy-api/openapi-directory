package openapisdk.models.operations;



public class ImportApiResponse {
    public Object badRequestException;
    public ImportApiResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public Object conflictException;
    public ImportApiResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public ImportApiResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ImportApiResponse importApiResponse;
    public ImportApiResponse withImportApiResponse(openapisdk.models.shared.ImportApiResponse importApiResponse) {
        this.importApiResponse = importApiResponse;
        return this;
    }
    public Object notFoundException;
    public ImportApiResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public ImportApiResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public ImportApiResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}