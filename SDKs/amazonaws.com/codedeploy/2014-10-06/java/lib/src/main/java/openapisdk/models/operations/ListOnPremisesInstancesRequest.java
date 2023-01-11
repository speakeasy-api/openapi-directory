package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListOnPremisesInstancesRequest {
    public ListOnPremisesInstancesHeaders headers;
    public ListOnPremisesInstancesRequest withHeaders(ListOnPremisesInstancesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListOnPremisesInstancesInput request;
    public ListOnPremisesInstancesRequest withRequest(openapisdk.models.shared.ListOnPremisesInstancesInput request) {
        this.request = request;
        return this;
    }
}