package openapisdk.models.operations;



public class GetContainersFloatingIpsRequest {
    public GetContainersFloatingIpsQueryParams queryParams;
    public GetContainersFloatingIpsRequest withQueryParams(GetContainersFloatingIpsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetContainersFloatingIpsHeaders headers;
    public GetContainersFloatingIpsRequest withHeaders(GetContainersFloatingIpsHeaders headers) {
        this.headers = headers;
        return this;
    }
}