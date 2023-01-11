package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatchAutomationsIdRequest {
    public PatchAutomationsIdPathParams pathParams;
    public PatchAutomationsIdRequest withPathParams(PatchAutomationsIdPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public PatchAutomationsIdRequestBody request;
    public PatchAutomationsIdRequest withRequest(PatchAutomationsIdRequestBody request) {
        this.request = request;
        return this;
    }
}