package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostGetPciQuestionnaireUrlRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public PostGetPciQuestionnaireUrlRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
    public PostGetPciQuestionnaireUrlSecurity security;
    public PostGetPciQuestionnaireUrlRequest withSecurity(PostGetPciQuestionnaireUrlSecurity security) {
        this.security = security;
        return this;
    }
}