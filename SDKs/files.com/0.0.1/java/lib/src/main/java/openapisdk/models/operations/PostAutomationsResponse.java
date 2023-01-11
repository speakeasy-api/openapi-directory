package openapisdk.models.operations;



public class PostAutomationsResponse {
    public openapisdk.models.shared.AutomationEntity automationEntity;
    public PostAutomationsResponse withAutomationEntity(openapisdk.models.shared.AutomationEntity automationEntity) {
        this.automationEntity = automationEntity;
        return this;
    }
    public String contentType;
    public PostAutomationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostAutomationsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}