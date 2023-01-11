package openapisdk.models.operations;



public class PostGetSendQuotaRequest {
    public PostGetSendQuotaQueryParams queryParams;
    public PostGetSendQuotaRequest withQueryParams(PostGetSendQuotaQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostGetSendQuotaHeaders headers;
    public PostGetSendQuotaRequest withHeaders(PostGetSendQuotaHeaders headers) {
        this.headers = headers;
        return this;
    }
}