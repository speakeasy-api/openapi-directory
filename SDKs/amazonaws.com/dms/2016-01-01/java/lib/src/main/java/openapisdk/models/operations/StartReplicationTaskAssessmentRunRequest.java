package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StartReplicationTaskAssessmentRunRequest {
    public StartReplicationTaskAssessmentRunHeaders headers;
    public StartReplicationTaskAssessmentRunRequest withHeaders(StartReplicationTaskAssessmentRunHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.StartReplicationTaskAssessmentRunMessage request;
    public StartReplicationTaskAssessmentRunRequest withRequest(openapisdk.models.shared.StartReplicationTaskAssessmentRunMessage request) {
        this.request = request;
        return this;
    }
}