package openapisdk.models.operations;



public class ListAutoScalingConfigurationsResponse {
    public String contentType;
    public ListAutoScalingConfigurationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServiceErrorException;
    public ListAutoScalingConfigurationsResponse withInternalServiceErrorException(Object internalServiceErrorException) {
        this.internalServiceErrorException = internalServiceErrorException;
        return this;
    }
    public Object invalidRequestException;
    public ListAutoScalingConfigurationsResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public openapisdk.models.shared.ListAutoScalingConfigurationsResponse listAutoScalingConfigurationsResponse;
    public ListAutoScalingConfigurationsResponse withListAutoScalingConfigurationsResponse(openapisdk.models.shared.ListAutoScalingConfigurationsResponse listAutoScalingConfigurationsResponse) {
        this.listAutoScalingConfigurationsResponse = listAutoScalingConfigurationsResponse;
        return this;
    }
    public Long statusCode;
    public ListAutoScalingConfigurationsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}