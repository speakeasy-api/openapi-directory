package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutDeliverabilityDashboardOptionRequest {
    public PutDeliverabilityDashboardOptionHeaders headers;
    public PutDeliverabilityDashboardOptionRequest withHeaders(PutDeliverabilityDashboardOptionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PutDeliverabilityDashboardOptionRequestBody request;
    public PutDeliverabilityDashboardOptionRequest withRequest(PutDeliverabilityDashboardOptionRequestBody request) {
        this.request = request;
        return this;
    }
}