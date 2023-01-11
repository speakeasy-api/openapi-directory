package openapisdk.models.operations;



public class ListSecurityProfilesRequest {
    public ListSecurityProfilesQueryParams queryParams;
    public ListSecurityProfilesRequest withQueryParams(ListSecurityProfilesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListSecurityProfilesHeaders headers;
    public ListSecurityProfilesRequest withHeaders(ListSecurityProfilesHeaders headers) {
        this.headers = headers;
        return this;
    }
}