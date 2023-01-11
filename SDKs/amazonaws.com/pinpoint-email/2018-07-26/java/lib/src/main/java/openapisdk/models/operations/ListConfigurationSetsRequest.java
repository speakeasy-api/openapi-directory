package openapisdk.models.operations;



public class ListConfigurationSetsRequest {
    public ListConfigurationSetsQueryParams queryParams;
    public ListConfigurationSetsRequest withQueryParams(ListConfigurationSetsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListConfigurationSetsHeaders headers;
    public ListConfigurationSetsRequest withHeaders(ListConfigurationSetsHeaders headers) {
        this.headers = headers;
        return this;
    }
}