package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateSqlInjectionMatchSetRequest {
    public CreateSqlInjectionMatchSetHeaders headers;
    public CreateSqlInjectionMatchSetRequest withHeaders(CreateSqlInjectionMatchSetHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateSqlInjectionMatchSetRequest request;
    public CreateSqlInjectionMatchSetRequest withRequest(openapisdk.models.shared.CreateSqlInjectionMatchSetRequest request) {
        this.request = request;
        return this;
    }
}