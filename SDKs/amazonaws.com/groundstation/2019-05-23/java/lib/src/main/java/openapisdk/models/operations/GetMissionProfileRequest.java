package openapisdk.models.operations;



public class GetMissionProfileRequest {
    public GetMissionProfilePathParams pathParams;
    public GetMissionProfileRequest withPathParams(GetMissionProfilePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetMissionProfileHeaders headers;
    public GetMissionProfileRequest withHeaders(GetMissionProfileHeaders headers) {
        this.headers = headers;
        return this;
    }
}