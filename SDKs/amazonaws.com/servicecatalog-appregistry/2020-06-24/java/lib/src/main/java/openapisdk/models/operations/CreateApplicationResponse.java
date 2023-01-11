package openapisdk.models.operations;



public class CreateApplicationResponse {
    public Object conflictException;
    public CreateApplicationResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public CreateApplicationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateApplicationResponse createApplicationResponse;
    public CreateApplicationResponse withCreateApplicationResponse(openapisdk.models.shared.CreateApplicationResponse createApplicationResponse) {
        this.createApplicationResponse = createApplicationResponse;
        return this;
    }
    public Object internalServerException;
    public CreateApplicationResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object serviceQuotaExceededException;
    public CreateApplicationResponse withServiceQuotaExceededException(Object serviceQuotaExceededException) {
        this.serviceQuotaExceededException = serviceQuotaExceededException;
        return this;
    }
    public Long statusCode;
    public CreateApplicationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}