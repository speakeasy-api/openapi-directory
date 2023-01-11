package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostPackageServiceJsonPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=path")
    public String path;
    public PostPackageServiceJsonPathParams withPath(String path) {
        this.path = path;
        return this;
    }
}