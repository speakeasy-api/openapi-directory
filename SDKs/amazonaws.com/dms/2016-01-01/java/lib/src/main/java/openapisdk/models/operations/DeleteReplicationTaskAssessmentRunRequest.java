package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteReplicationTaskAssessmentRunRequest {
    public DeleteReplicationTaskAssessmentRunHeaders headers;
    public DeleteReplicationTaskAssessmentRunRequest withHeaders(DeleteReplicationTaskAssessmentRunHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteReplicationTaskAssessmentRunMessage request;
    public DeleteReplicationTaskAssessmentRunRequest withRequest(openapisdk.models.shared.DeleteReplicationTaskAssessmentRunMessage request) {
        this.request = request;
        return this;
    }
}