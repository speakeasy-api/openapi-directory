package openapisdk.models.operations;



public class CreateRecommenderConfigurationResponse {
    public Object badRequestException;
    public CreateRecommenderConfigurationResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public CreateRecommenderConfigurationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateRecommenderConfigurationResponse createRecommenderConfigurationResponse;
    public CreateRecommenderConfigurationResponse withCreateRecommenderConfigurationResponse(openapisdk.models.shared.CreateRecommenderConfigurationResponse createRecommenderConfigurationResponse) {
        this.createRecommenderConfigurationResponse = createRecommenderConfigurationResponse;
        return this;
    }
    public Object forbiddenException;
    public CreateRecommenderConfigurationResponse withForbiddenException(Object forbiddenException) {
        this.forbiddenException = forbiddenException;
        return this;
    }
    public Object internalServerErrorException;
    public CreateRecommenderConfigurationResponse withInternalServerErrorException(Object internalServerErrorException) {
        this.internalServerErrorException = internalServerErrorException;
        return this;
    }
    public Object methodNotAllowedException;
    public CreateRecommenderConfigurationResponse withMethodNotAllowedException(Object methodNotAllowedException) {
        this.methodNotAllowedException = methodNotAllowedException;
        return this;
    }
    public Object notFoundException;
    public CreateRecommenderConfigurationResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Object payloadTooLargeException;
    public CreateRecommenderConfigurationResponse withPayloadTooLargeException(Object payloadTooLargeException) {
        this.payloadTooLargeException = payloadTooLargeException;
        return this;
    }
    public Long statusCode;
    public CreateRecommenderConfigurationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public CreateRecommenderConfigurationResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}