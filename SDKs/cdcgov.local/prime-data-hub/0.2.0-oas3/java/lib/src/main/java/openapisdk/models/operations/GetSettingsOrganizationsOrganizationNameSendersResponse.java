package openapisdk.models.operations;



public class GetSettingsOrganizationsOrganizationNameSendersResponse {
    public String contentType;
    public GetSettingsOrganizationsOrganizationNameSendersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Sender[] senders;
    public GetSettingsOrganizationsOrganizationNameSendersResponse withSenders(openapisdk.models.shared.Sender[] senders) {
        this.senders = senders;
        return this;
    }
    public Long statusCode;
    public GetSettingsOrganizationsOrganizationNameSendersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}