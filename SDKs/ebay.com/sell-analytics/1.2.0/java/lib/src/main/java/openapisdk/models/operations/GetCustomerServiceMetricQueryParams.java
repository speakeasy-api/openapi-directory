package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCustomerServiceMetricQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=evaluation_marketplace_id")
    public String evaluationMarketplaceId;
    public GetCustomerServiceMetricQueryParams withEvaluationMarketplaceId(String evaluationMarketplaceId) {
        this.evaluationMarketplaceId = evaluationMarketplaceId;
        return this;
    }
}