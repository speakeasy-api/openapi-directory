package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AssociateBudgetWithResourceRequest {
    public AssociateBudgetWithResourceHeaders headers;
    public AssociateBudgetWithResourceRequest withHeaders(AssociateBudgetWithResourceHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AssociateBudgetWithResourceInput request;
    public AssociateBudgetWithResourceRequest withRequest(openapisdk.models.shared.AssociateBudgetWithResourceInput request) {
        this.request = request;
        return this;
    }
}