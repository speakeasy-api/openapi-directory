package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListRulesPackagesRequest {
    public ListRulesPackagesQueryParams queryParams;
    public ListRulesPackagesRequest withQueryParams(ListRulesPackagesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListRulesPackagesHeaders headers;
    public ListRulesPackagesRequest withHeaders(ListRulesPackagesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListRulesPackagesRequest request;
    public ListRulesPackagesRequest withRequest(openapisdk.models.shared.ListRulesPackagesRequest request) {
        this.request = request;
        return this;
    }
}