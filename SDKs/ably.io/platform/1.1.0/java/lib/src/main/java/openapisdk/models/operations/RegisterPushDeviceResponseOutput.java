package openapisdk.models.operations;



public class RegisterPushDeviceResponseOutput {
    public byte[] body;
    public RegisterPushDeviceResponseOutput withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public RegisterPushDeviceResponseOutput withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeviceDetailsOutput deviceDetails;
    public RegisterPushDeviceResponseOutput withDeviceDetails(openapisdk.models.shared.DeviceDetailsOutput deviceDetails) {
        this.deviceDetails = deviceDetails;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public RegisterPushDeviceResponseOutput withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public RegisterPushDeviceResponseOutput withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}