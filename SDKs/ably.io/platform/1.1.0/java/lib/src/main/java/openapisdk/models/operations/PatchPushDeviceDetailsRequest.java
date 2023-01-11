package openapisdk.models.operations;



public class PatchPushDeviceDetailsRequest {
    public PatchPushDeviceDetailsPathParams pathParams;
    public PatchPushDeviceDetailsRequest withPathParams(PatchPushDeviceDetailsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PatchPushDeviceDetailsQueryParams queryParams;
    public PatchPushDeviceDetailsRequest withQueryParams(PatchPushDeviceDetailsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PatchPushDeviceDetailsHeaders headers;
    public PatchPushDeviceDetailsRequest withHeaders(PatchPushDeviceDetailsHeaders headers) {
        this.headers = headers;
        return this;
    }
    public PatchPushDeviceDetailsRequestsInput request;
    public PatchPushDeviceDetailsRequest withRequest(PatchPushDeviceDetailsRequestsInput request) {
        this.request = request;
        return this;
    }
}