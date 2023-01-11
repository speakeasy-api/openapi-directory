package openapisdk.models.operations;



public class ReadPresetRequest {
    public ReadPresetPathParams pathParams;
    public ReadPresetRequest withPathParams(ReadPresetPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ReadPresetHeaders headers;
    public ReadPresetRequest withHeaders(ReadPresetHeaders headers) {
        this.headers = headers;
        return this;
    }
}