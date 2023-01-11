package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteReportRequest {
    public DeleteReportHeaders headers;
    public DeleteReportRequest withHeaders(DeleteReportHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteReportInput request;
    public DeleteReportRequest withRequest(openapisdk.models.shared.DeleteReportInput request) {
        this.request = request;
        return this;
    }
}