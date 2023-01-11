package openapisdk.models.operations;



public class GetApplicationDateRangeKpiResponse {
    public Object badRequestException;
    public GetApplicationDateRangeKpiResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public GetApplicationDateRangeKpiResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object forbiddenException;
    public GetApplicationDateRangeKpiResponse withForbiddenException(Object forbiddenException) {
        this.forbiddenException = forbiddenException;
        return this;
    }
    public openapisdk.models.shared.GetApplicationDateRangeKpiResponse getApplicationDateRangeKpiResponse;
    public GetApplicationDateRangeKpiResponse withGetApplicationDateRangeKpiResponse(openapisdk.models.shared.GetApplicationDateRangeKpiResponse getApplicationDateRangeKpiResponse) {
        this.getApplicationDateRangeKpiResponse = getApplicationDateRangeKpiResponse;
        return this;
    }
    public Object internalServerErrorException;
    public GetApplicationDateRangeKpiResponse withInternalServerErrorException(Object internalServerErrorException) {
        this.internalServerErrorException = internalServerErrorException;
        return this;
    }
    public Object methodNotAllowedException;
    public GetApplicationDateRangeKpiResponse withMethodNotAllowedException(Object methodNotAllowedException) {
        this.methodNotAllowedException = methodNotAllowedException;
        return this;
    }
    public Object notFoundException;
    public GetApplicationDateRangeKpiResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Object payloadTooLargeException;
    public GetApplicationDateRangeKpiResponse withPayloadTooLargeException(Object payloadTooLargeException) {
        this.payloadTooLargeException = payloadTooLargeException;
        return this;
    }
    public Long statusCode;
    public GetApplicationDateRangeKpiResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public GetApplicationDateRangeKpiResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}