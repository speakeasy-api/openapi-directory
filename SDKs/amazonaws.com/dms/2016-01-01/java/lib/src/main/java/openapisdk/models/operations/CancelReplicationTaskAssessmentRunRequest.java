package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CancelReplicationTaskAssessmentRunRequest {
    public CancelReplicationTaskAssessmentRunHeaders headers;
    public CancelReplicationTaskAssessmentRunRequest withHeaders(CancelReplicationTaskAssessmentRunHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CancelReplicationTaskAssessmentRunMessage request;
    public CancelReplicationTaskAssessmentRunRequest withRequest(openapisdk.models.shared.CancelReplicationTaskAssessmentRunMessage request) {
        this.request = request;
        return this;
    }
}