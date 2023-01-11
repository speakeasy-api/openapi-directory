package openapisdk.models.operations;



public class CreateAutoScalingConfigurationResponse {
    public String contentType;
    public CreateAutoScalingConfigurationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateAutoScalingConfigurationResponse createAutoScalingConfigurationResponse;
    public CreateAutoScalingConfigurationResponse withCreateAutoScalingConfigurationResponse(openapisdk.models.shared.CreateAutoScalingConfigurationResponse createAutoScalingConfigurationResponse) {
        this.createAutoScalingConfigurationResponse = createAutoScalingConfigurationResponse;
        return this;
    }
    public Object internalServiceErrorException;
    public CreateAutoScalingConfigurationResponse withInternalServiceErrorException(Object internalServiceErrorException) {
        this.internalServiceErrorException = internalServiceErrorException;
        return this;
    }
    public Object invalidRequestException;
    public CreateAutoScalingConfigurationResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object serviceQuotaExceededException;
    public CreateAutoScalingConfigurationResponse withServiceQuotaExceededException(Object serviceQuotaExceededException) {
        this.serviceQuotaExceededException = serviceQuotaExceededException;
        return this;
    }
    public Long statusCode;
    public CreateAutoScalingConfigurationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}