package openapisdk.models.operations;



public class PatchAutomationsIdResponse {
    public openapisdk.models.shared.AutomationEntity automationEntity;
    public PatchAutomationsIdResponse withAutomationEntity(openapisdk.models.shared.AutomationEntity automationEntity) {
        this.automationEntity = automationEntity;
        return this;
    }
    public String contentType;
    public PatchAutomationsIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PatchAutomationsIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}