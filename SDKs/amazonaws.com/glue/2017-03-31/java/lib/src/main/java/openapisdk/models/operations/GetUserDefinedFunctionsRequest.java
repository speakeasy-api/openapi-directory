package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetUserDefinedFunctionsRequest {
    public GetUserDefinedFunctionsQueryParams queryParams;
    public GetUserDefinedFunctionsRequest withQueryParams(GetUserDefinedFunctionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetUserDefinedFunctionsHeaders headers;
    public GetUserDefinedFunctionsRequest withHeaders(GetUserDefinedFunctionsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetUserDefinedFunctionsRequest request;
    public GetUserDefinedFunctionsRequest withRequest(openapisdk.models.shared.GetUserDefinedFunctionsRequest request) {
        this.request = request;
        return this;
    }
}