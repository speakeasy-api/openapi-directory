package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisassociateBudgetFromResourceRequest {
    public DisassociateBudgetFromResourceHeaders headers;
    public DisassociateBudgetFromResourceRequest withHeaders(DisassociateBudgetFromResourceHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DisassociateBudgetFromResourceInput request;
    public DisassociateBudgetFromResourceRequest withRequest(openapisdk.models.shared.DisassociateBudgetFromResourceInput request) {
        this.request = request;
        return this;
    }
}