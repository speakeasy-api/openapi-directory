package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteReportGroupRequest {
    public DeleteReportGroupHeaders headers;
    public DeleteReportGroupRequest withHeaders(DeleteReportGroupHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteReportGroupInput request;
    public DeleteReportGroupRequest withRequest(openapisdk.models.shared.DeleteReportGroupInput request) {
        this.request = request;
        return this;
    }
}