package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateSqlInjectionMatchSetRequest {
    public UpdateSqlInjectionMatchSetHeaders headers;
    public UpdateSqlInjectionMatchSetRequest withHeaders(UpdateSqlInjectionMatchSetHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateSqlInjectionMatchSetRequest request;
    public UpdateSqlInjectionMatchSetRequest withRequest(openapisdk.models.shared.UpdateSqlInjectionMatchSetRequest request) {
        this.request = request;
        return this;
    }
}