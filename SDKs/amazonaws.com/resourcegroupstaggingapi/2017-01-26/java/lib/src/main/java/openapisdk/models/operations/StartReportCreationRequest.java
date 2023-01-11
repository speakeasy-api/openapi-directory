package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StartReportCreationRequest {
    public StartReportCreationHeaders headers;
    public StartReportCreationRequest withHeaders(StartReportCreationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.StartReportCreationInput request;
    public StartReportCreationRequest withRequest(openapisdk.models.shared.StartReportCreationInput request) {
        this.request = request;
        return this;
    }
}