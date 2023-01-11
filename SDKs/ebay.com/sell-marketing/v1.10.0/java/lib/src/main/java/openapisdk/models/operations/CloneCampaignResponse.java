package openapisdk.models.operations;



public class CloneCampaignResponse {
    public String contentType;
    public CloneCampaignResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public CloneCampaignResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public CloneCampaignResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> cloneCampaign201ApplicationJSONObject;
    public CloneCampaignResponse withCloneCampaign201ApplicationJsonObject(java.util.Map<String, Object> cloneCampaign201ApplicationJSONObject) {
        this.cloneCampaign201ApplicationJSONObject = cloneCampaign201ApplicationJSONObject;
        return this;
    }
}