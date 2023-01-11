package openapisdk.models.operations;



public class DeleteAutoScalingConfigurationResponse {
    public String contentType;
    public DeleteAutoScalingConfigurationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeleteAutoScalingConfigurationResponse deleteAutoScalingConfigurationResponse;
    public DeleteAutoScalingConfigurationResponse withDeleteAutoScalingConfigurationResponse(openapisdk.models.shared.DeleteAutoScalingConfigurationResponse deleteAutoScalingConfigurationResponse) {
        this.deleteAutoScalingConfigurationResponse = deleteAutoScalingConfigurationResponse;
        return this;
    }
    public Object internalServiceErrorException;
    public DeleteAutoScalingConfigurationResponse withInternalServiceErrorException(Object internalServiceErrorException) {
        this.internalServiceErrorException = internalServiceErrorException;
        return this;
    }
    public Object invalidRequestException;
    public DeleteAutoScalingConfigurationResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceNotFoundException;
    public DeleteAutoScalingConfigurationResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DeleteAutoScalingConfigurationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}