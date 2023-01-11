package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BatchCreateDelegationByAssessmentRequest {
    public BatchCreateDelegationByAssessmentPathParams pathParams;
    public BatchCreateDelegationByAssessmentRequest withPathParams(BatchCreateDelegationByAssessmentPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public BatchCreateDelegationByAssessmentHeaders headers;
    public BatchCreateDelegationByAssessmentRequest withHeaders(BatchCreateDelegationByAssessmentHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public BatchCreateDelegationByAssessmentRequestBody request;
    public BatchCreateDelegationByAssessmentRequest withRequest(BatchCreateDelegationByAssessmentRequestBody request) {
        this.request = request;
        return this;
    }
}