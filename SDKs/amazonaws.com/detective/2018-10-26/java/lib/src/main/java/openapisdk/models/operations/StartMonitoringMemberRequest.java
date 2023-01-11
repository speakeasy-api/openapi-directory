package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StartMonitoringMemberRequest {
    public StartMonitoringMemberHeaders headers;
    public StartMonitoringMemberRequest withHeaders(StartMonitoringMemberHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public StartMonitoringMemberRequestBody request;
    public StartMonitoringMemberRequest withRequest(StartMonitoringMemberRequestBody request) {
        this.request = request;
        return this;
    }
}