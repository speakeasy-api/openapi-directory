package openapisdk.models.operations;



public class GetJobDocumentRequest {
    public GetJobDocumentPathParams pathParams;
    public GetJobDocumentRequest withPathParams(GetJobDocumentPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetJobDocumentHeaders headers;
    public GetJobDocumentRequest withHeaders(GetJobDocumentHeaders headers) {
        this.headers = headers;
        return this;
    }
}