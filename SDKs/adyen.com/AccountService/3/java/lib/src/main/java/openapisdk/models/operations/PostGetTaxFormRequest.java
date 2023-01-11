package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostGetTaxFormRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public PostGetTaxFormRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
    public PostGetTaxFormSecurity security;
    public PostGetTaxFormRequest withSecurity(PostGetTaxFormSecurity security) {
        this.security = security;
        return this;
    }
}