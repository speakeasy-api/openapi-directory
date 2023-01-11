package openapisdk.models.operations;



public class PutPushDeviceDetailsRequest {
    public PutPushDeviceDetailsPathParams pathParams;
    public PutPushDeviceDetailsRequest withPathParams(PutPushDeviceDetailsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PutPushDeviceDetailsQueryParams queryParams;
    public PutPushDeviceDetailsRequest withQueryParams(PutPushDeviceDetailsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PutPushDeviceDetailsHeaders headers;
    public PutPushDeviceDetailsRequest withHeaders(PutPushDeviceDetailsHeaders headers) {
        this.headers = headers;
        return this;
    }
    public PutPushDeviceDetailsRequestsInput request;
    public PutPushDeviceDetailsRequest withRequest(PutPushDeviceDetailsRequestsInput request) {
        this.request = request;
        return this;
    }
}