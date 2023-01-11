package openapisdk.models.operations;



public class ReimportApiResponse {
    public Object badRequestException;
    public ReimportApiResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public Object conflictException;
    public ReimportApiResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public ReimportApiResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object notFoundException;
    public ReimportApiResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public openapisdk.models.shared.ReimportApiResponse reimportApiResponse;
    public ReimportApiResponse withReimportApiResponse(openapisdk.models.shared.ReimportApiResponse reimportApiResponse) {
        this.reimportApiResponse = reimportApiResponse;
        return this;
    }
    public Long statusCode;
    public ReimportApiResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public ReimportApiResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}