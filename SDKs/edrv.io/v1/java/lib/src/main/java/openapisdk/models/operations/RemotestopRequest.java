package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RemotestopRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public RemotestopRequestBody request;
    public RemotestopRequest withRequest(RemotestopRequestBody request) {
        this.request = request;
        return this;
    }
}