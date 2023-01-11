package openapisdk.models.operations;



public class GetSpeechSynthesisTaskRequest {
    public GetSpeechSynthesisTaskPathParams pathParams;
    public GetSpeechSynthesisTaskRequest withPathParams(GetSpeechSynthesisTaskPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetSpeechSynthesisTaskHeaders headers;
    public GetSpeechSynthesisTaskRequest withHeaders(GetSpeechSynthesisTaskHeaders headers) {
        this.headers = headers;
        return this;
    }
}