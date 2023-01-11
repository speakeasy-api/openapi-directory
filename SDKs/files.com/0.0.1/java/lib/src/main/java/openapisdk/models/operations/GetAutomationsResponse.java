package openapisdk.models.operations;



public class GetAutomationsResponse {
    public openapisdk.models.shared.AutomationEntity[] automationEntities;
    public GetAutomationsResponse withAutomationEntities(openapisdk.models.shared.AutomationEntity[] automationEntities) {
        this.automationEntities = automationEntities;
        return this;
    }
    public String contentType;
    public GetAutomationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetAutomationsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}