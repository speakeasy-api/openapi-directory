package openapisdk.models.operations;



public class PutSettingsOrganizationsOrganizationNameSendersSenderNameResponse {
    public String contentType;
    public PutSettingsOrganizationsOrganizationNameSendersSenderNameResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Sender[] senders;
    public PutSettingsOrganizationsOrganizationNameSendersSenderNameResponse withSenders(openapisdk.models.shared.Sender[] senders) {
        this.senders = senders;
        return this;
    }
    public Long statusCode;
    public PutSettingsOrganizationsOrganizationNameSendersSenderNameResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}