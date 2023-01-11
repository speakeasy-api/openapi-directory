package openapisdk.models.operations;



public class GetAutomationsIdResponse {
    public openapisdk.models.shared.AutomationEntity automationEntity;
    public GetAutomationsIdResponse withAutomationEntity(openapisdk.models.shared.AutomationEntity automationEntity) {
        this.automationEntity = automationEntity;
        return this;
    }
    public String contentType;
    public GetAutomationsIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetAutomationsIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}