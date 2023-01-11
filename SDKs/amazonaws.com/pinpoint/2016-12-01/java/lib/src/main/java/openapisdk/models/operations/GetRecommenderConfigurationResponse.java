package openapisdk.models.operations;



public class GetRecommenderConfigurationResponse {
    public Object badRequestException;
    public GetRecommenderConfigurationResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public GetRecommenderConfigurationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object forbiddenException;
    public GetRecommenderConfigurationResponse withForbiddenException(Object forbiddenException) {
        this.forbiddenException = forbiddenException;
        return this;
    }
    public openapisdk.models.shared.GetRecommenderConfigurationResponse getRecommenderConfigurationResponse;
    public GetRecommenderConfigurationResponse withGetRecommenderConfigurationResponse(openapisdk.models.shared.GetRecommenderConfigurationResponse getRecommenderConfigurationResponse) {
        this.getRecommenderConfigurationResponse = getRecommenderConfigurationResponse;
        return this;
    }
    public Object internalServerErrorException;
    public GetRecommenderConfigurationResponse withInternalServerErrorException(Object internalServerErrorException) {
        this.internalServerErrorException = internalServerErrorException;
        return this;
    }
    public Object methodNotAllowedException;
    public GetRecommenderConfigurationResponse withMethodNotAllowedException(Object methodNotAllowedException) {
        this.methodNotAllowedException = methodNotAllowedException;
        return this;
    }
    public Object notFoundException;
    public GetRecommenderConfigurationResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Object payloadTooLargeException;
    public GetRecommenderConfigurationResponse withPayloadTooLargeException(Object payloadTooLargeException) {
        this.payloadTooLargeException = payloadTooLargeException;
        return this;
    }
    public Long statusCode;
    public GetRecommenderConfigurationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public GetRecommenderConfigurationResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}