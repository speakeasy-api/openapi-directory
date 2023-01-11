package openapisdk.models.operations;



public class UpdateCampaignResponse {
    public String contentType;
    public UpdateCampaignResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidInputException;
    public UpdateCampaignResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object resourceInUseException;
    public UpdateCampaignResponse withResourceInUseException(Object resourceInUseException) {
        this.resourceInUseException = resourceInUseException;
        return this;
    }
    public Object resourceNotFoundException;
    public UpdateCampaignResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public UpdateCampaignResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UpdateCampaignResponse updateCampaignResponse;
    public UpdateCampaignResponse withUpdateCampaignResponse(openapisdk.models.shared.UpdateCampaignResponse updateCampaignResponse) {
        this.updateCampaignResponse = updateCampaignResponse;
        return this;
    }
}