package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatchStylesPathRequestBody {
    @SpeakeasyMetadata("multipartForm:file")
    public PatchStylesPathRequestBodyFile file;
    public PatchStylesPathRequestBody withFile(PatchStylesPathRequestBodyFile file) {
        this.file = file;
        return this;
    }
}