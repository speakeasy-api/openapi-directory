package openapisdk.models.operations;



public class CreateConnectionResponse {
    public String contentType;
    public CreateConnectionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateConnectionResponse createConnectionResponse;
    public CreateConnectionResponse withCreateConnectionResponse(openapisdk.models.shared.CreateConnectionResponse createConnectionResponse) {
        this.createConnectionResponse = createConnectionResponse;
        return this;
    }
    public Object internalServiceErrorException;
    public CreateConnectionResponse withInternalServiceErrorException(Object internalServiceErrorException) {
        this.internalServiceErrorException = internalServiceErrorException;
        return this;
    }
    public Object invalidRequestException;
    public CreateConnectionResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object serviceQuotaExceededException;
    public CreateConnectionResponse withServiceQuotaExceededException(Object serviceQuotaExceededException) {
        this.serviceQuotaExceededException = serviceQuotaExceededException;
        return this;
    }
    public Long statusCode;
    public CreateConnectionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}