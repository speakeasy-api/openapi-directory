package openapisdk.models.operations;



public class AddOrUpdateIntegrationLinkResponse {
    public String contentType;
    public AddOrUpdateIntegrationLinkResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.IntegrationLinkModel integrationLinkModel;
    public AddOrUpdateIntegrationLinkResponse withIntegrationLinkModel(openapisdk.models.shared.IntegrationLinkModel integrationLinkModel) {
        this.integrationLinkModel = integrationLinkModel;
        return this;
    }
    public Long statusCode;
    public AddOrUpdateIntegrationLinkResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}