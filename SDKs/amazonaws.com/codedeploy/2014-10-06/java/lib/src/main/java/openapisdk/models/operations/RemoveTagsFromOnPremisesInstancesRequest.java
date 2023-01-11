package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RemoveTagsFromOnPremisesInstancesRequest {
    public RemoveTagsFromOnPremisesInstancesHeaders headers;
    public RemoveTagsFromOnPremisesInstancesRequest withHeaders(RemoveTagsFromOnPremisesInstancesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.RemoveTagsFromOnPremisesInstancesInput request;
    public RemoveTagsFromOnPremisesInstancesRequest withRequest(openapisdk.models.shared.RemoveTagsFromOnPremisesInstancesInput request) {
        this.request = request;
        return this;
    }
}