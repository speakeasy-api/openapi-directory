package openapisdk.models.operations;



public class ListCampaignsResponse {
    public String contentType;
    public ListCampaignsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidInputException;
    public ListCampaignsResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object invalidNextTokenException;
    public ListCampaignsResponse withInvalidNextTokenException(Object invalidNextTokenException) {
        this.invalidNextTokenException = invalidNextTokenException;
        return this;
    }
    public openapisdk.models.shared.ListCampaignsResponse listCampaignsResponse;
    public ListCampaignsResponse withListCampaignsResponse(openapisdk.models.shared.ListCampaignsResponse listCampaignsResponse) {
        this.listCampaignsResponse = listCampaignsResponse;
        return this;
    }
    public Long statusCode;
    public ListCampaignsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}