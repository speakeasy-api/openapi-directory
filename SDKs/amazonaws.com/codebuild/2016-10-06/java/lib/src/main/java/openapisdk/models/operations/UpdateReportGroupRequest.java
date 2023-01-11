package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateReportGroupRequest {
    public UpdateReportGroupHeaders headers;
    public UpdateReportGroupRequest withHeaders(UpdateReportGroupHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateReportGroupInput request;
    public UpdateReportGroupRequest withRequest(openapisdk.models.shared.UpdateReportGroupInput request) {
        this.request = request;
        return this;
    }
}