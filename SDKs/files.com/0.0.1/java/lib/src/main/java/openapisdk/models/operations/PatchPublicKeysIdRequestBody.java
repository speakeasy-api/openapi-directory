package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatchPublicKeysIdRequestBody {
    @SpeakeasyMetadata("multipartForm:name=title")
    public String title;
    public PatchPublicKeysIdRequestBody withTitle(String title) {
        this.title = title;
        return this;
    }
}