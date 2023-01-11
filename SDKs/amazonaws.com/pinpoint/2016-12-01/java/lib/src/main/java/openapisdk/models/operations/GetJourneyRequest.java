package openapisdk.models.operations;



public class GetJourneyRequest {
    public GetJourneyPathParams pathParams;
    public GetJourneyRequest withPathParams(GetJourneyPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetJourneyHeaders headers;
    public GetJourneyRequest withHeaders(GetJourneyHeaders headers) {
        this.headers = headers;
        return this;
    }
}