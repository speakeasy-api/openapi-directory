package openapisdk.models.operations;



public class GetAttachmentRequest {
    public GetAttachmentPathParams pathParams;
    public GetAttachmentRequest withPathParams(GetAttachmentPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetAttachmentQueryParams queryParams;
    public GetAttachmentRequest withQueryParams(GetAttachmentQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}