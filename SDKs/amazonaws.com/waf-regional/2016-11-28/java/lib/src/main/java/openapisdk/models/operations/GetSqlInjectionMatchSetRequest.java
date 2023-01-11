package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSqlInjectionMatchSetRequest {
    public GetSqlInjectionMatchSetHeaders headers;
    public GetSqlInjectionMatchSetRequest withHeaders(GetSqlInjectionMatchSetHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetSqlInjectionMatchSetRequest request;
    public GetSqlInjectionMatchSetRequest withRequest(openapisdk.models.shared.GetSqlInjectionMatchSetRequest request) {
        this.request = request;
        return this;
    }
}