package openapisdk.models.operations;



public class DeleteSettingsOrganizationsOrganizationNameSendersSenderNameResponse {
    public String contentType;
    public DeleteSettingsOrganizationsOrganizationNameSendersSenderNameResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Sender sender;
    public DeleteSettingsOrganizationsOrganizationNameSendersSenderNameResponse withSender(openapisdk.models.shared.Sender sender) {
        this.sender = sender;
        return this;
    }
    public Long statusCode;
    public DeleteSettingsOrganizationsOrganizationNameSendersSenderNameResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}