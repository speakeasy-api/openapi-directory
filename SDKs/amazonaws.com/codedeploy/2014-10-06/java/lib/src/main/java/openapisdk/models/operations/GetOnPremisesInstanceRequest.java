package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetOnPremisesInstanceRequest {
    public GetOnPremisesInstanceHeaders headers;
    public GetOnPremisesInstanceRequest withHeaders(GetOnPremisesInstanceHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetOnPremisesInstanceInput request;
    public GetOnPremisesInstanceRequest withRequest(openapisdk.models.shared.GetOnPremisesInstanceInput request) {
        this.request = request;
        return this;
    }
}