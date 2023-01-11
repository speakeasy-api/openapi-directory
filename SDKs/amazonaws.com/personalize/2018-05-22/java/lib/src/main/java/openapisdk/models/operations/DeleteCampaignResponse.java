package openapisdk.models.operations;



public class DeleteCampaignResponse {
    public String contentType;
    public DeleteCampaignResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidInputException;
    public DeleteCampaignResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object resourceInUseException;
    public DeleteCampaignResponse withResourceInUseException(Object resourceInUseException) {
        this.resourceInUseException = resourceInUseException;
        return this;
    }
    public Object resourceNotFoundException;
    public DeleteCampaignResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DeleteCampaignResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}