package openapisdk.models.operations;



public class GetSettingsOrganizationsOrganizationNameReceiversReceiverNameResponse {
    public String contentType;
    public GetSettingsOrganizationsOrganizationNameReceiversReceiverNameResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Receiver receiver;
    public GetSettingsOrganizationsOrganizationNameReceiversReceiverNameResponse withReceiver(openapisdk.models.shared.Receiver receiver) {
        this.receiver = receiver;
        return this;
    }
    public Long statusCode;
    public GetSettingsOrganizationsOrganizationNameReceiversReceiverNameResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}