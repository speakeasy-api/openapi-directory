package openapisdk.models.operations;



public class GetThingRuntimeConfigurationResponse {
    public Object badRequestException;
    public GetThingRuntimeConfigurationResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public GetThingRuntimeConfigurationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetThingRuntimeConfigurationResponse getThingRuntimeConfigurationResponse;
    public GetThingRuntimeConfigurationResponse withGetThingRuntimeConfigurationResponse(openapisdk.models.shared.GetThingRuntimeConfigurationResponse getThingRuntimeConfigurationResponse) {
        this.getThingRuntimeConfigurationResponse = getThingRuntimeConfigurationResponse;
        return this;
    }
    public Object internalServerErrorException;
    public GetThingRuntimeConfigurationResponse withInternalServerErrorException(Object internalServerErrorException) {
        this.internalServerErrorException = internalServerErrorException;
        return this;
    }
    public Long statusCode;
    public GetThingRuntimeConfigurationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}