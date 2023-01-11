package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AssociateTrackerConsumerRequest {
    public AssociateTrackerConsumerPathParams pathParams;
    public AssociateTrackerConsumerRequest withPathParams(AssociateTrackerConsumerPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AssociateTrackerConsumerHeaders headers;
    public AssociateTrackerConsumerRequest withHeaders(AssociateTrackerConsumerHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public AssociateTrackerConsumerRequestBody request;
    public AssociateTrackerConsumerRequest withRequest(AssociateTrackerConsumerRequestBody request) {
        this.request = request;
        return this;
    }
}