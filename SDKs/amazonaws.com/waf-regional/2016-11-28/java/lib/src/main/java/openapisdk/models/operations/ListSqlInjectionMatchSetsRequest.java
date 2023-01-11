package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListSqlInjectionMatchSetsRequest {
    public ListSqlInjectionMatchSetsHeaders headers;
    public ListSqlInjectionMatchSetsRequest withHeaders(ListSqlInjectionMatchSetsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListSqlInjectionMatchSetsRequest request;
    public ListSqlInjectionMatchSetsRequest withRequest(openapisdk.models.shared.ListSqlInjectionMatchSetsRequest request) {
        this.request = request;
        return this;
    }
}