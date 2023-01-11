package openapisdk.models.operations;



public class GetProjectAnalysesResponse {
    public String contentType;
    public GetProjectAnalysesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DefaultPayload defaultPayload;
    public GetProjectAnalysesResponse withDefaultPayload(openapisdk.models.shared.DefaultPayload defaultPayload) {
        this.defaultPayload = defaultPayload;
        return this;
    }
    public Long statusCode;
    public GetProjectAnalysesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetProjectAnalyses200ApplicationJson getProjectAnalyses200ApplicationJSONObject;
    public GetProjectAnalysesResponse withGetProjectAnalyses200ApplicationJsonObject(GetProjectAnalyses200ApplicationJson getProjectAnalyses200ApplicationJSONObject) {
        this.getProjectAnalyses200ApplicationJSONObject = getProjectAnalyses200ApplicationJSONObject;
        return this;
    }
}