package openapisdk.models.operations;



public class ListDropletBackupsRequest {
    public ListDropletBackupsPathParams pathParams;
    public ListDropletBackupsRequest withPathParams(ListDropletBackupsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListDropletBackupsQueryParams queryParams;
    public ListDropletBackupsRequest withQueryParams(ListDropletBackupsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}