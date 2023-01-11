package openapisdk.models.operations;



public class GetJourneyDateRangeKpiResponse {
    public Object badRequestException;
    public GetJourneyDateRangeKpiResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public GetJourneyDateRangeKpiResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object forbiddenException;
    public GetJourneyDateRangeKpiResponse withForbiddenException(Object forbiddenException) {
        this.forbiddenException = forbiddenException;
        return this;
    }
    public openapisdk.models.shared.GetJourneyDateRangeKpiResponse getJourneyDateRangeKpiResponse;
    public GetJourneyDateRangeKpiResponse withGetJourneyDateRangeKpiResponse(openapisdk.models.shared.GetJourneyDateRangeKpiResponse getJourneyDateRangeKpiResponse) {
        this.getJourneyDateRangeKpiResponse = getJourneyDateRangeKpiResponse;
        return this;
    }
    public Object internalServerErrorException;
    public GetJourneyDateRangeKpiResponse withInternalServerErrorException(Object internalServerErrorException) {
        this.internalServerErrorException = internalServerErrorException;
        return this;
    }
    public Object methodNotAllowedException;
    public GetJourneyDateRangeKpiResponse withMethodNotAllowedException(Object methodNotAllowedException) {
        this.methodNotAllowedException = methodNotAllowedException;
        return this;
    }
    public Object notFoundException;
    public GetJourneyDateRangeKpiResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Object payloadTooLargeException;
    public GetJourneyDateRangeKpiResponse withPayloadTooLargeException(Object payloadTooLargeException) {
        this.payloadTooLargeException = payloadTooLargeException;
        return this;
    }
    public Long statusCode;
    public GetJourneyDateRangeKpiResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public GetJourneyDateRangeKpiResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}