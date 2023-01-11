package openapisdk.models.operations;



public class ListSpeechSynthesisTasksRequest {
    public ListSpeechSynthesisTasksQueryParams queryParams;
    public ListSpeechSynthesisTasksRequest withQueryParams(ListSpeechSynthesisTasksQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListSpeechSynthesisTasksHeaders headers;
    public ListSpeechSynthesisTasksRequest withHeaders(ListSpeechSynthesisTasksHeaders headers) {
        this.headers = headers;
        return this;
    }
}