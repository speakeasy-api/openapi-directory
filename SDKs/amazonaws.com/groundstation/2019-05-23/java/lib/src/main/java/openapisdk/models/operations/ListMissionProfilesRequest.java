package openapisdk.models.operations;



public class ListMissionProfilesRequest {
    public ListMissionProfilesQueryParams queryParams;
    public ListMissionProfilesRequest withQueryParams(ListMissionProfilesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListMissionProfilesHeaders headers;
    public ListMissionProfilesRequest withHeaders(ListMissionProfilesHeaders headers) {
        this.headers = headers;
        return this;
    }
}