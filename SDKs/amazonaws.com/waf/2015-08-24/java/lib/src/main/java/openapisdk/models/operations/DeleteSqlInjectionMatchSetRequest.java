package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteSqlInjectionMatchSetRequest {
    public DeleteSqlInjectionMatchSetHeaders headers;
    public DeleteSqlInjectionMatchSetRequest withHeaders(DeleteSqlInjectionMatchSetHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteSqlInjectionMatchSetRequest request;
    public DeleteSqlInjectionMatchSetRequest withRequest(openapisdk.models.shared.DeleteSqlInjectionMatchSetRequest request) {
        this.request = request;
        return this;
    }
}