package openapisdk.models.operations;



public class GetDomainDeliverabilityCampaignResponse {
    public Object badRequestException;
    public GetDomainDeliverabilityCampaignResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public GetDomainDeliverabilityCampaignResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetDomainDeliverabilityCampaignResponse getDomainDeliverabilityCampaignResponse;
    public GetDomainDeliverabilityCampaignResponse withGetDomainDeliverabilityCampaignResponse(openapisdk.models.shared.GetDomainDeliverabilityCampaignResponse getDomainDeliverabilityCampaignResponse) {
        this.getDomainDeliverabilityCampaignResponse = getDomainDeliverabilityCampaignResponse;
        return this;
    }
    public Object notFoundException;
    public GetDomainDeliverabilityCampaignResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public GetDomainDeliverabilityCampaignResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public GetDomainDeliverabilityCampaignResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}