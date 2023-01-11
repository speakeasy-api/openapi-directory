package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StartExportLabelsTaskRunRequest {
    public StartExportLabelsTaskRunHeaders headers;
    public StartExportLabelsTaskRunRequest withHeaders(StartExportLabelsTaskRunHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.StartExportLabelsTaskRunRequest request;
    public StartExportLabelsTaskRunRequest withRequest(openapisdk.models.shared.StartExportLabelsTaskRunRequest request) {
        this.request = request;
        return this;
    }
}