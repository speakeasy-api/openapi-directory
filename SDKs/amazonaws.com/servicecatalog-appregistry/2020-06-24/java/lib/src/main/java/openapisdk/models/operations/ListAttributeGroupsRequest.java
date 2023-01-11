package openapisdk.models.operations;



public class ListAttributeGroupsRequest {
    public ListAttributeGroupsQueryParams queryParams;
    public ListAttributeGroupsRequest withQueryParams(ListAttributeGroupsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListAttributeGroupsHeaders headers;
    public ListAttributeGroupsRequest withHeaders(ListAttributeGroupsHeaders headers) {
        this.headers = headers;
        return this;
    }
}