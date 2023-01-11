package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RemotestartRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public RemotestartRequestBody request;
    public RemotestartRequest withRequest(RemotestartRequestBody request) {
        this.request = request;
        return this;
    }
}