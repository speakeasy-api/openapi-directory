package openapisdk.models.operations;



public class DeleteRecommenderConfigurationResponse {
    public Object badRequestException;
    public DeleteRecommenderConfigurationResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public DeleteRecommenderConfigurationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeleteRecommenderConfigurationResponse deleteRecommenderConfigurationResponse;
    public DeleteRecommenderConfigurationResponse withDeleteRecommenderConfigurationResponse(openapisdk.models.shared.DeleteRecommenderConfigurationResponse deleteRecommenderConfigurationResponse) {
        this.deleteRecommenderConfigurationResponse = deleteRecommenderConfigurationResponse;
        return this;
    }
    public Object forbiddenException;
    public DeleteRecommenderConfigurationResponse withForbiddenException(Object forbiddenException) {
        this.forbiddenException = forbiddenException;
        return this;
    }
    public Object internalServerErrorException;
    public DeleteRecommenderConfigurationResponse withInternalServerErrorException(Object internalServerErrorException) {
        this.internalServerErrorException = internalServerErrorException;
        return this;
    }
    public Object methodNotAllowedException;
    public DeleteRecommenderConfigurationResponse withMethodNotAllowedException(Object methodNotAllowedException) {
        this.methodNotAllowedException = methodNotAllowedException;
        return this;
    }
    public Object notFoundException;
    public DeleteRecommenderConfigurationResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Object payloadTooLargeException;
    public DeleteRecommenderConfigurationResponse withPayloadTooLargeException(Object payloadTooLargeException) {
        this.payloadTooLargeException = payloadTooLargeException;
        return this;
    }
    public Long statusCode;
    public DeleteRecommenderConfigurationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public DeleteRecommenderConfigurationResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}