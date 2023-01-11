package openapisdk.models.operations;



public class FolderListForPathRequest {
    public FolderListForPathPathParams pathParams;
    public FolderListForPathRequest withPathParams(FolderListForPathPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FolderListForPathQueryParams queryParams;
    public FolderListForPathRequest withQueryParams(FolderListForPathQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}