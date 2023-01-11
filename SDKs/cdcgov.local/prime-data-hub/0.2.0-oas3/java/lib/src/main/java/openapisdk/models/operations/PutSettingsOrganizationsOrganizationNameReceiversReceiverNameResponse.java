package openapisdk.models.operations;



public class PutSettingsOrganizationsOrganizationNameReceiversReceiverNameResponse {
    public String contentType;
    public PutSettingsOrganizationsOrganizationNameReceiversReceiverNameResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Receiver receiver;
    public PutSettingsOrganizationsOrganizationNameReceiversReceiverNameResponse withReceiver(openapisdk.models.shared.Receiver receiver) {
        this.receiver = receiver;
        return this;
    }
    public Long statusCode;
    public PutSettingsOrganizationsOrganizationNameReceiversReceiverNameResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}