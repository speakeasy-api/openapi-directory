package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StartReplicationTaskAssessmentRequest {
    public StartReplicationTaskAssessmentHeaders headers;
    public StartReplicationTaskAssessmentRequest withHeaders(StartReplicationTaskAssessmentHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.StartReplicationTaskAssessmentMessage request;
    public StartReplicationTaskAssessmentRequest withRequest(openapisdk.models.shared.StartReplicationTaskAssessmentMessage request) {
        this.request = request;
        return this;
    }
}