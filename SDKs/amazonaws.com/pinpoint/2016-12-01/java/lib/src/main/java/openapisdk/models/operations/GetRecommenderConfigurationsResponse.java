package openapisdk.models.operations;



public class GetRecommenderConfigurationsResponse {
    public Object badRequestException;
    public GetRecommenderConfigurationsResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public GetRecommenderConfigurationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object forbiddenException;
    public GetRecommenderConfigurationsResponse withForbiddenException(Object forbiddenException) {
        this.forbiddenException = forbiddenException;
        return this;
    }
    public openapisdk.models.shared.GetRecommenderConfigurationsResponse getRecommenderConfigurationsResponse;
    public GetRecommenderConfigurationsResponse withGetRecommenderConfigurationsResponse(openapisdk.models.shared.GetRecommenderConfigurationsResponse getRecommenderConfigurationsResponse) {
        this.getRecommenderConfigurationsResponse = getRecommenderConfigurationsResponse;
        return this;
    }
    public Object internalServerErrorException;
    public GetRecommenderConfigurationsResponse withInternalServerErrorException(Object internalServerErrorException) {
        this.internalServerErrorException = internalServerErrorException;
        return this;
    }
    public Object methodNotAllowedException;
    public GetRecommenderConfigurationsResponse withMethodNotAllowedException(Object methodNotAllowedException) {
        this.methodNotAllowedException = methodNotAllowedException;
        return this;
    }
    public Object notFoundException;
    public GetRecommenderConfigurationsResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Object payloadTooLargeException;
    public GetRecommenderConfigurationsResponse withPayloadTooLargeException(Object payloadTooLargeException) {
        this.payloadTooLargeException = payloadTooLargeException;
        return this;
    }
    public Long statusCode;
    public GetRecommenderConfigurationsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public GetRecommenderConfigurationsResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}