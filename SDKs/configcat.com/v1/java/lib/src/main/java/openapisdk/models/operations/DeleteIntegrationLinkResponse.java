package openapisdk.models.operations;



public class DeleteIntegrationLinkResponse {
    public String contentType;
    public DeleteIntegrationLinkResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeleteIntegrationLinkModel deleteIntegrationLinkModel;
    public DeleteIntegrationLinkResponse withDeleteIntegrationLinkModel(openapisdk.models.shared.DeleteIntegrationLinkModel deleteIntegrationLinkModel) {
        this.deleteIntegrationLinkModel = deleteIntegrationLinkModel;
        return this;
    }
    public Long statusCode;
    public DeleteIntegrationLinkResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}