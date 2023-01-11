package openapisdk.models.operations;



public class CreateServiceResponse {
    public String contentType;
    public CreateServiceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateServiceResponse createServiceResponse;
    public CreateServiceResponse withCreateServiceResponse(openapisdk.models.shared.CreateServiceResponse createServiceResponse) {
        this.createServiceResponse = createServiceResponse;
        return this;
    }
    public Object internalServiceErrorException;
    public CreateServiceResponse withInternalServiceErrorException(Object internalServiceErrorException) {
        this.internalServiceErrorException = internalServiceErrorException;
        return this;
    }
    public Object invalidRequestException;
    public CreateServiceResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object serviceQuotaExceededException;
    public CreateServiceResponse withServiceQuotaExceededException(Object serviceQuotaExceededException) {
        this.serviceQuotaExceededException = serviceQuotaExceededException;
        return this;
    }
    public Long statusCode;
    public CreateServiceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}