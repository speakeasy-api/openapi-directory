package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReportTaskProgressRequest {
    public ReportTaskProgressHeaders headers;
    public ReportTaskProgressRequest withHeaders(ReportTaskProgressHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ReportTaskProgressInput request;
    public ReportTaskProgressRequest withRequest(openapisdk.models.shared.ReportTaskProgressInput request) {
        this.request = request;
        return this;
    }
}