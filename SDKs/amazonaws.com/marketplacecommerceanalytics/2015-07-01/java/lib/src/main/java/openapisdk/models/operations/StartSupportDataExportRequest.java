package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StartSupportDataExportRequest {
    public StartSupportDataExportHeaders headers;
    public StartSupportDataExportRequest withHeaders(StartSupportDataExportHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.StartSupportDataExportRequest request;
    public StartSupportDataExportRequest withRequest(openapisdk.models.shared.StartSupportDataExportRequest request) {
        this.request = request;
        return this;
    }
}