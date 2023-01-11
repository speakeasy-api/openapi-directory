package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatchSiteRequest {
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public PatchSiteRequestBody request;
    public PatchSiteRequest withRequest(PatchSiteRequestBody request) {
        this.request = request;
        return this;
    }
}