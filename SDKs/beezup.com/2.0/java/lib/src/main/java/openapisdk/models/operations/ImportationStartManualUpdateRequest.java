package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ImportationStartManualUpdateRequest {
    public ImportationStartManualUpdatePathParams pathParams;
    public ImportationStartManualUpdateRequest withPathParams(ImportationStartManualUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.StartManualImportRequest request;
    public ImportationStartManualUpdateRequest withRequest(openapisdk.models.shared.StartManualImportRequest request) {
        this.request = request;
        return this;
    }
}