package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatchFileCommentsIdRequestBody {
    @SpeakeasyMetadata("multipartForm:name=body")
    public String body;
    public PatchFileCommentsIdRequestBody withBody(String body) {
        this.body = body;
        return this;
    }
}