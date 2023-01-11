package openapisdk.models.operations;



public class DescribeCampaignResponse {
    public String contentType;
    public DescribeCampaignResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeCampaignResponse describeCampaignResponse;
    public DescribeCampaignResponse withDescribeCampaignResponse(openapisdk.models.shared.DescribeCampaignResponse describeCampaignResponse) {
        this.describeCampaignResponse = describeCampaignResponse;
        return this;
    }
    public Object invalidInputException;
    public DescribeCampaignResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeCampaignResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeCampaignResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}