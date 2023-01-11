package openapisdk.models.operations;



public class PutPushDeviceDetailsResponseOutput {
    public byte[] body;
    public PutPushDeviceDetailsResponseOutput withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PutPushDeviceDetailsResponseOutput withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeviceDetailsOutput deviceDetails;
    public PutPushDeviceDetailsResponseOutput withDeviceDetails(openapisdk.models.shared.DeviceDetailsOutput deviceDetails) {
        this.deviceDetails = deviceDetails;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public PutPushDeviceDetailsResponseOutput withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public PutPushDeviceDetailsResponseOutput withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}