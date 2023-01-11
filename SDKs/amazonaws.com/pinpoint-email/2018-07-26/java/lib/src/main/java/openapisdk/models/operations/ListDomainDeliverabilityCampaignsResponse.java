package openapisdk.models.operations;



public class ListDomainDeliverabilityCampaignsResponse {
    public Object badRequestException;
    public ListDomainDeliverabilityCampaignsResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public ListDomainDeliverabilityCampaignsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListDomainDeliverabilityCampaignsResponse listDomainDeliverabilityCampaignsResponse;
    public ListDomainDeliverabilityCampaignsResponse withListDomainDeliverabilityCampaignsResponse(openapisdk.models.shared.ListDomainDeliverabilityCampaignsResponse listDomainDeliverabilityCampaignsResponse) {
        this.listDomainDeliverabilityCampaignsResponse = listDomainDeliverabilityCampaignsResponse;
        return this;
    }
    public Object notFoundException;
    public ListDomainDeliverabilityCampaignsResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public ListDomainDeliverabilityCampaignsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public ListDomainDeliverabilityCampaignsResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}