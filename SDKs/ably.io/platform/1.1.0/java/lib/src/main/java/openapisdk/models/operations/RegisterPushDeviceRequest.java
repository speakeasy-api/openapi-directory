package openapisdk.models.operations;



public class RegisterPushDeviceRequest {
    public RegisterPushDeviceQueryParams queryParams;
    public RegisterPushDeviceRequest withQueryParams(RegisterPushDeviceQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public RegisterPushDeviceHeaders headers;
    public RegisterPushDeviceRequest withHeaders(RegisterPushDeviceHeaders headers) {
        this.headers = headers;
        return this;
    }
    public RegisterPushDeviceRequestsInput request;
    public RegisterPushDeviceRequest withRequest(RegisterPushDeviceRequestsInput request) {
        this.request = request;
        return this;
    }
}