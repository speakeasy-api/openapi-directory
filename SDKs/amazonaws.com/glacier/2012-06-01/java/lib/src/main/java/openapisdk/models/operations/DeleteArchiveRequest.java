package openapisdk.models.operations;



public class DeleteArchiveRequest {
    public DeleteArchivePathParams pathParams;
    public DeleteArchiveRequest withPathParams(DeleteArchivePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteArchiveHeaders headers;
    public DeleteArchiveRequest withHeaders(DeleteArchiveHeaders headers) {
        this.headers = headers;
        return this;
    }
}