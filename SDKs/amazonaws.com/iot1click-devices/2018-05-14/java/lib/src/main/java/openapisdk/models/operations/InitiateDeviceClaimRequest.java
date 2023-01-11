package openapisdk.models.operations;



public class InitiateDeviceClaimRequest {
    public InitiateDeviceClaimPathParams pathParams;
    public InitiateDeviceClaimRequest withPathParams(InitiateDeviceClaimPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public InitiateDeviceClaimHeaders headers;
    public InitiateDeviceClaimRequest withHeaders(InitiateDeviceClaimHeaders headers) {
        this.headers = headers;
        return this;
    }
}