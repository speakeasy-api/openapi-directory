package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateReportGroupRequest {
    public CreateReportGroupHeaders headers;
    public CreateReportGroupRequest withHeaders(CreateReportGroupHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateReportGroupInput request;
    public CreateReportGroupRequest withRequest(openapisdk.models.shared.CreateReportGroupInput request) {
        this.request = request;
        return this;
    }
}