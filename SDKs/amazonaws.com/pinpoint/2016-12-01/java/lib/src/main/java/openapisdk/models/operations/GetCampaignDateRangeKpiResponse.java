package openapisdk.models.operations;



public class GetCampaignDateRangeKpiResponse {
    public Object badRequestException;
    public GetCampaignDateRangeKpiResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public GetCampaignDateRangeKpiResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object forbiddenException;
    public GetCampaignDateRangeKpiResponse withForbiddenException(Object forbiddenException) {
        this.forbiddenException = forbiddenException;
        return this;
    }
    public openapisdk.models.shared.GetCampaignDateRangeKpiResponse getCampaignDateRangeKpiResponse;
    public GetCampaignDateRangeKpiResponse withGetCampaignDateRangeKpiResponse(openapisdk.models.shared.GetCampaignDateRangeKpiResponse getCampaignDateRangeKpiResponse) {
        this.getCampaignDateRangeKpiResponse = getCampaignDateRangeKpiResponse;
        return this;
    }
    public Object internalServerErrorException;
    public GetCampaignDateRangeKpiResponse withInternalServerErrorException(Object internalServerErrorException) {
        this.internalServerErrorException = internalServerErrorException;
        return this;
    }
    public Object methodNotAllowedException;
    public GetCampaignDateRangeKpiResponse withMethodNotAllowedException(Object methodNotAllowedException) {
        this.methodNotAllowedException = methodNotAllowedException;
        return this;
    }
    public Object notFoundException;
    public GetCampaignDateRangeKpiResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Object payloadTooLargeException;
    public GetCampaignDateRangeKpiResponse withPayloadTooLargeException(Object payloadTooLargeException) {
        this.payloadTooLargeException = payloadTooLargeException;
        return this;
    }
    public Long statusCode;
    public GetCampaignDateRangeKpiResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public GetCampaignDateRangeKpiResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}