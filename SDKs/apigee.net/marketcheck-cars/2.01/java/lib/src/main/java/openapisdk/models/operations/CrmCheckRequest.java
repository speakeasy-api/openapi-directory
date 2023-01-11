package openapisdk.models.operations;



public class CrmCheckRequest {
    public CrmCheckPathParams pathParams;
    public CrmCheckRequest withPathParams(CrmCheckPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CrmCheckQueryParams queryParams;
    public CrmCheckRequest withQueryParams(CrmCheckQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}