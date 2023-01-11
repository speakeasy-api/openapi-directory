package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatchStylesPathPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=path")
    public String path;
    public PatchStylesPathPathParams withPath(String path) {
        this.path = path;
        return this;
    }
}