package openapisdk.models.operations;



public class CreateCampaignResponse {
    public String contentType;
    public CreateCampaignResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public CreateCampaignResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public CreateCampaignResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> createCampaign201ApplicationJSONObject;
    public CreateCampaignResponse withCreateCampaign201ApplicationJsonObject(java.util.Map<String, Object> createCampaign201ApplicationJSONObject) {
        this.createCampaign201ApplicationJSONObject = createCampaign201ApplicationJSONObject;
        return this;
    }
}