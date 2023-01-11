package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatchMessageCommentsIdRequestBody {
    @SpeakeasyMetadata("multipartForm:name=body")
    public String body;
    public PatchMessageCommentsIdRequestBody withBody(String body) {
        this.body = body;
        return this;
    }
}