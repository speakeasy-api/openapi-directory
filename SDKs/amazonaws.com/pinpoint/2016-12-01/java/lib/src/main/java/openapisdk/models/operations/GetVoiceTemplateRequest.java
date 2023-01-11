package openapisdk.models.operations;



public class GetVoiceTemplateRequest {
    public GetVoiceTemplatePathParams pathParams;
    public GetVoiceTemplateRequest withPathParams(GetVoiceTemplatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetVoiceTemplateQueryParams queryParams;
    public GetVoiceTemplateRequest withQueryParams(GetVoiceTemplateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetVoiceTemplateHeaders headers;
    public GetVoiceTemplateRequest withHeaders(GetVoiceTemplateHeaders headers) {
        this.headers = headers;
        return this;
    }
}