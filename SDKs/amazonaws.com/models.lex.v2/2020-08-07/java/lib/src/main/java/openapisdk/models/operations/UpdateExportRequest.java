package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateExportRequest {
    public UpdateExportPathParams pathParams;
    public UpdateExportRequest withPathParams(UpdateExportPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdateExportHeaders headers;
    public UpdateExportRequest withHeaders(UpdateExportHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateExportRequestBody request;
    public UpdateExportRequest withRequest(UpdateExportRequestBody request) {
        this.request = request;
        return this;
    }
}