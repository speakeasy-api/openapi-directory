package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatchUserRequest {
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public PatchUserRequestBody request;
    public PatchUserRequest withRequest(PatchUserRequestBody request) {
        this.request = request;
        return this;
    }
}