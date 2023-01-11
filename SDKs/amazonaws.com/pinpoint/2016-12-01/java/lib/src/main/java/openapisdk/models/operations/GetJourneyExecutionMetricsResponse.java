package openapisdk.models.operations;



public class GetJourneyExecutionMetricsResponse {
    public Object badRequestException;
    public GetJourneyExecutionMetricsResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public GetJourneyExecutionMetricsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object forbiddenException;
    public GetJourneyExecutionMetricsResponse withForbiddenException(Object forbiddenException) {
        this.forbiddenException = forbiddenException;
        return this;
    }
    public openapisdk.models.shared.GetJourneyExecutionMetricsResponse getJourneyExecutionMetricsResponse;
    public GetJourneyExecutionMetricsResponse withGetJourneyExecutionMetricsResponse(openapisdk.models.shared.GetJourneyExecutionMetricsResponse getJourneyExecutionMetricsResponse) {
        this.getJourneyExecutionMetricsResponse = getJourneyExecutionMetricsResponse;
        return this;
    }
    public Object internalServerErrorException;
    public GetJourneyExecutionMetricsResponse withInternalServerErrorException(Object internalServerErrorException) {
        this.internalServerErrorException = internalServerErrorException;
        return this;
    }
    public Object methodNotAllowedException;
    public GetJourneyExecutionMetricsResponse withMethodNotAllowedException(Object methodNotAllowedException) {
        this.methodNotAllowedException = methodNotAllowedException;
        return this;
    }
    public Object notFoundException;
    public GetJourneyExecutionMetricsResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Object payloadTooLargeException;
    public GetJourneyExecutionMetricsResponse withPayloadTooLargeException(Object payloadTooLargeException) {
        this.payloadTooLargeException = payloadTooLargeException;
        return this;
    }
    public Long statusCode;
    public GetJourneyExecutionMetricsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public GetJourneyExecutionMetricsResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}