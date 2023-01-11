package openapisdk.models.operations;



public class GetSettingsOrganizationsOrganizationNameReceiversResponse {
    public String contentType;
    public GetSettingsOrganizationsOrganizationNameReceiversResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Receiver[] receivers;
    public GetSettingsOrganizationsOrganizationNameReceiversResponse withReceivers(openapisdk.models.shared.Receiver[] receivers) {
        this.receivers = receivers;
        return this;
    }
    public Long statusCode;
    public GetSettingsOrganizationsOrganizationNameReceiversResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}