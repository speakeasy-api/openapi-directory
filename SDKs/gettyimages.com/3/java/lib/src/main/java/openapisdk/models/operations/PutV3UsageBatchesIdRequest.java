package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutV3UsageBatchesIdRequest {
    public PutV3UsageBatchesIdPathParams pathParams;
    public PutV3UsageBatchesIdRequest withPathParams(PutV3UsageBatchesIdPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ReportUsageBatchRequest request;
    public PutV3UsageBatchesIdRequest withRequest(openapisdk.models.shared.ReportUsageBatchRequest request) {
        this.request = request;
        return this;
    }
}