package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReportTaskRunnerHeartbeatRequest {
    public ReportTaskRunnerHeartbeatHeaders headers;
    public ReportTaskRunnerHeartbeatRequest withHeaders(ReportTaskRunnerHeartbeatHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ReportTaskRunnerHeartbeatInput request;
    public ReportTaskRunnerHeartbeatRequest withRequest(openapisdk.models.shared.ReportTaskRunnerHeartbeatInput request) {
        this.request = request;
        return this;
    }
}