package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddTagsToOnPremisesInstancesRequest {
    public AddTagsToOnPremisesInstancesHeaders headers;
    public AddTagsToOnPremisesInstancesRequest withHeaders(AddTagsToOnPremisesInstancesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AddTagsToOnPremisesInstancesInput request;
    public AddTagsToOnPremisesInstancesRequest withRequest(openapisdk.models.shared.AddTagsToOnPremisesInstancesInput request) {
        this.request = request;
        return this;
    }
}