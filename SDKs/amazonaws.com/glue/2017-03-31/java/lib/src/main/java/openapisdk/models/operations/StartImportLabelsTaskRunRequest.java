package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StartImportLabelsTaskRunRequest {
    public StartImportLabelsTaskRunHeaders headers;
    public StartImportLabelsTaskRunRequest withHeaders(StartImportLabelsTaskRunHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.StartImportLabelsTaskRunRequest request;
    public StartImportLabelsTaskRunRequest withRequest(openapisdk.models.shared.StartImportLabelsTaskRunRequest request) {
        this.request = request;
        return this;
    }
}