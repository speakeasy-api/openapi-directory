package openapisdk.models.operations;



public class GetListConfigurationSetsRequest {
    public GetListConfigurationSetsQueryParams queryParams;
    public GetListConfigurationSetsRequest withQueryParams(GetListConfigurationSetsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetListConfigurationSetsHeaders headers;
    public GetListConfigurationSetsRequest withHeaders(GetListConfigurationSetsHeaders headers) {
        this.headers = headers;
        return this;
    }
}