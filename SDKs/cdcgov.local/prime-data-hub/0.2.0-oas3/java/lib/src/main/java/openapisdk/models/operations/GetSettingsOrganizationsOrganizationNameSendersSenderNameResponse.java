package openapisdk.models.operations;



public class GetSettingsOrganizationsOrganizationNameSendersSenderNameResponse {
    public String contentType;
    public GetSettingsOrganizationsOrganizationNameSendersSenderNameResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Sender sender;
    public GetSettingsOrganizationsOrganizationNameSendersSenderNameResponse withSender(openapisdk.models.shared.Sender sender) {
        this.sender = sender;
        return this;
    }
    public Long statusCode;
    public GetSettingsOrganizationsOrganizationNameSendersSenderNameResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}