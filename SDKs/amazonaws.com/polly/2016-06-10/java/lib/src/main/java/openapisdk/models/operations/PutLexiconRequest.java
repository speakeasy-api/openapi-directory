package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutLexiconRequest {
    public PutLexiconPathParams pathParams;
    public PutLexiconRequest withPathParams(PutLexiconPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PutLexiconHeaders headers;
    public PutLexiconRequest withHeaders(PutLexiconHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PutLexiconRequestBody request;
    public PutLexiconRequest withRequest(PutLexiconRequestBody request) {
        this.request = request;
        return this;
    }
}