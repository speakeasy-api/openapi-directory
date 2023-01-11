package openapisdk.models.operations;



public class DeleteSettingsOrganizationsOrganizationNameReceiversReceiverNameResponse {
    public String contentType;
    public DeleteSettingsOrganizationsOrganizationNameReceiversReceiverNameResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Receiver receiver;
    public DeleteSettingsOrganizationsOrganizationNameReceiversReceiverNameResponse withReceiver(openapisdk.models.shared.Receiver receiver) {
        this.receiver = receiver;
        return this;
    }
    public Long statusCode;
    public DeleteSettingsOrganizationsOrganizationNameReceiversReceiverNameResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}