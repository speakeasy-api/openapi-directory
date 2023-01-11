package openapisdk.models.operations;



public class GetPushDeviceDetailsResponseOutput {
    public byte[] body;
    public GetPushDeviceDetailsResponseOutput withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetPushDeviceDetailsResponseOutput withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeviceDetailsOutput deviceDetails;
    public GetPushDeviceDetailsResponseOutput withDeviceDetails(openapisdk.models.shared.DeviceDetailsOutput deviceDetails) {
        this.deviceDetails = deviceDetails;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetPushDeviceDetailsResponseOutput withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public GetPushDeviceDetailsResponseOutput withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}