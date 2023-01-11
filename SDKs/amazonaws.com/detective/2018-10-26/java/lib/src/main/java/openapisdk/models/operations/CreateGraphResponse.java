package openapisdk.models.operations;



public class CreateGraphResponse {
    public Object conflictException;
    public CreateGraphResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public CreateGraphResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateGraphResponse createGraphResponse;
    public CreateGraphResponse withCreateGraphResponse(openapisdk.models.shared.CreateGraphResponse createGraphResponse) {
        this.createGraphResponse = createGraphResponse;
        return this;
    }
    public Object internalServerException;
    public CreateGraphResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object serviceQuotaExceededException;
    public CreateGraphResponse withServiceQuotaExceededException(Object serviceQuotaExceededException) {
        this.serviceQuotaExceededException = serviceQuotaExceededException;
        return this;
    }
    public Long statusCode;
    public CreateGraphResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}