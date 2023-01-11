package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetParametersForImportRequest {
    public GetParametersForImportHeaders headers;
    public GetParametersForImportRequest withHeaders(GetParametersForImportHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetParametersForImportRequest request;
    public GetParametersForImportRequest withRequest(openapisdk.models.shared.GetParametersForImportRequest request) {
        this.request = request;
        return this;
    }
}