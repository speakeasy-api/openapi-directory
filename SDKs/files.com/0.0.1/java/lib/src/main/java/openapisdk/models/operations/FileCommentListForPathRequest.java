package openapisdk.models.operations;



public class FileCommentListForPathRequest {
    public FileCommentListForPathPathParams pathParams;
    public FileCommentListForPathRequest withPathParams(FileCommentListForPathPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FileCommentListForPathQueryParams queryParams;
    public FileCommentListForPathRequest withQueryParams(FileCommentListForPathQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}