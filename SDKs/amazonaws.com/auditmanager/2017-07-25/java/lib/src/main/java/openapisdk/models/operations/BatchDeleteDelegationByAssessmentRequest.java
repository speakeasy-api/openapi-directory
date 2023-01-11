package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BatchDeleteDelegationByAssessmentRequest {
    public BatchDeleteDelegationByAssessmentPathParams pathParams;
    public BatchDeleteDelegationByAssessmentRequest withPathParams(BatchDeleteDelegationByAssessmentPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public BatchDeleteDelegationByAssessmentHeaders headers;
    public BatchDeleteDelegationByAssessmentRequest withHeaders(BatchDeleteDelegationByAssessmentHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public BatchDeleteDelegationByAssessmentRequestBody request;
    public BatchDeleteDelegationByAssessmentRequest withRequest(BatchDeleteDelegationByAssessmentRequestBody request) {
        this.request = request;
        return this;
    }
}