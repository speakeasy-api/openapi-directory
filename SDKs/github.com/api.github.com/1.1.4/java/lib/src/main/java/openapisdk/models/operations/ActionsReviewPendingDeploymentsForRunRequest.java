package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ActionsReviewPendingDeploymentsForRunRequest {
    public ActionsReviewPendingDeploymentsForRunPathParams pathParams;
    public ActionsReviewPendingDeploymentsForRunRequest withPathParams(ActionsReviewPendingDeploymentsForRunPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ActionsReviewPendingDeploymentsForRunRequestBody request;
    public ActionsReviewPendingDeploymentsForRunRequest withRequest(ActionsReviewPendingDeploymentsForRunRequestBody request) {
        this.request = request;
        return this;
    }
}