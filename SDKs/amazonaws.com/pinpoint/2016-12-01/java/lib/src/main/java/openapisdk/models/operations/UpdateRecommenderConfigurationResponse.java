package openapisdk.models.operations;



public class UpdateRecommenderConfigurationResponse {
    public Object badRequestException;
    public UpdateRecommenderConfigurationResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public UpdateRecommenderConfigurationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object forbiddenException;
    public UpdateRecommenderConfigurationResponse withForbiddenException(Object forbiddenException) {
        this.forbiddenException = forbiddenException;
        return this;
    }
    public Object internalServerErrorException;
    public UpdateRecommenderConfigurationResponse withInternalServerErrorException(Object internalServerErrorException) {
        this.internalServerErrorException = internalServerErrorException;
        return this;
    }
    public Object methodNotAllowedException;
    public UpdateRecommenderConfigurationResponse withMethodNotAllowedException(Object methodNotAllowedException) {
        this.methodNotAllowedException = methodNotAllowedException;
        return this;
    }
    public Object notFoundException;
    public UpdateRecommenderConfigurationResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Object payloadTooLargeException;
    public UpdateRecommenderConfigurationResponse withPayloadTooLargeException(Object payloadTooLargeException) {
        this.payloadTooLargeException = payloadTooLargeException;
        return this;
    }
    public Long statusCode;
    public UpdateRecommenderConfigurationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public UpdateRecommenderConfigurationResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
    public openapisdk.models.shared.UpdateRecommenderConfigurationResponse updateRecommenderConfigurationResponse;
    public UpdateRecommenderConfigurationResponse withUpdateRecommenderConfigurationResponse(openapisdk.models.shared.UpdateRecommenderConfigurationResponse updateRecommenderConfigurationResponse) {
        this.updateRecommenderConfigurationResponse = updateRecommenderConfigurationResponse;
        return this;
    }
}