package openapisdk.models.operations;



public class UpdatePushDeviceDetailsResponseOutput {
    public byte[] body;
    public UpdatePushDeviceDetailsResponseOutput withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public UpdatePushDeviceDetailsResponseOutput withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeviceDetailsOutput deviceDetails;
    public UpdatePushDeviceDetailsResponseOutput withDeviceDetails(openapisdk.models.shared.DeviceDetailsOutput deviceDetails) {
        this.deviceDetails = deviceDetails;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public UpdatePushDeviceDetailsResponseOutput withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public UpdatePushDeviceDetailsResponseOutput withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}