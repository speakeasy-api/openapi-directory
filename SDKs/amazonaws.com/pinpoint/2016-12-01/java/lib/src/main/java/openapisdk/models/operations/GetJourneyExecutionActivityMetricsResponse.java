package openapisdk.models.operations;



public class GetJourneyExecutionActivityMetricsResponse {
    public Object badRequestException;
    public GetJourneyExecutionActivityMetricsResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public GetJourneyExecutionActivityMetricsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object forbiddenException;
    public GetJourneyExecutionActivityMetricsResponse withForbiddenException(Object forbiddenException) {
        this.forbiddenException = forbiddenException;
        return this;
    }
    public openapisdk.models.shared.GetJourneyExecutionActivityMetricsResponse getJourneyExecutionActivityMetricsResponse;
    public GetJourneyExecutionActivityMetricsResponse withGetJourneyExecutionActivityMetricsResponse(openapisdk.models.shared.GetJourneyExecutionActivityMetricsResponse getJourneyExecutionActivityMetricsResponse) {
        this.getJourneyExecutionActivityMetricsResponse = getJourneyExecutionActivityMetricsResponse;
        return this;
    }
    public Object internalServerErrorException;
    public GetJourneyExecutionActivityMetricsResponse withInternalServerErrorException(Object internalServerErrorException) {
        this.internalServerErrorException = internalServerErrorException;
        return this;
    }
    public Object methodNotAllowedException;
    public GetJourneyExecutionActivityMetricsResponse withMethodNotAllowedException(Object methodNotAllowedException) {
        this.methodNotAllowedException = methodNotAllowedException;
        return this;
    }
    public Object notFoundException;
    public GetJourneyExecutionActivityMetricsResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Object payloadTooLargeException;
    public GetJourneyExecutionActivityMetricsResponse withPayloadTooLargeException(Object payloadTooLargeException) {
        this.payloadTooLargeException = payloadTooLargeException;
        return this;
    }
    public Long statusCode;
    public GetJourneyExecutionActivityMetricsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public GetJourneyExecutionActivityMetricsResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}