package openapisdk.models.operations;



public class GetResumeProcessesRequest {
    public GetResumeProcessesQueryParams queryParams;
    public GetResumeProcessesRequest withQueryParams(GetResumeProcessesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetResumeProcessesHeaders headers;
    public GetResumeProcessesRequest withHeaders(GetResumeProcessesHeaders headers) {
        this.headers = headers;
        return this;
    }
}