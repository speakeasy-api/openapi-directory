package openapisdk.models.operations;



public class GetCampaignActivitiesResponse {
    public Object badRequestException;
    public GetCampaignActivitiesResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public GetCampaignActivitiesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object forbiddenException;
    public GetCampaignActivitiesResponse withForbiddenException(Object forbiddenException) {
        this.forbiddenException = forbiddenException;
        return this;
    }
    public openapisdk.models.shared.GetCampaignActivitiesResponse getCampaignActivitiesResponse;
    public GetCampaignActivitiesResponse withGetCampaignActivitiesResponse(openapisdk.models.shared.GetCampaignActivitiesResponse getCampaignActivitiesResponse) {
        this.getCampaignActivitiesResponse = getCampaignActivitiesResponse;
        return this;
    }
    public Object internalServerErrorException;
    public GetCampaignActivitiesResponse withInternalServerErrorException(Object internalServerErrorException) {
        this.internalServerErrorException = internalServerErrorException;
        return this;
    }
    public Object methodNotAllowedException;
    public GetCampaignActivitiesResponse withMethodNotAllowedException(Object methodNotAllowedException) {
        this.methodNotAllowedException = methodNotAllowedException;
        return this;
    }
    public Object notFoundException;
    public GetCampaignActivitiesResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Object payloadTooLargeException;
    public GetCampaignActivitiesResponse withPayloadTooLargeException(Object payloadTooLargeException) {
        this.payloadTooLargeException = payloadTooLargeException;
        return this;
    }
    public Long statusCode;
    public GetCampaignActivitiesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public GetCampaignActivitiesResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}