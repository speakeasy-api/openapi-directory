package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TranslateRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.TranslateRequest request;
    public TranslateRequest withRequest(openapisdk.models.shared.TranslateRequest request) {
        this.request = request;
        return this;
    }
    public TranslateSecurity security;
    public TranslateRequest withSecurity(TranslateSecurity security) {
        this.security = security;
        return this;
    }
}