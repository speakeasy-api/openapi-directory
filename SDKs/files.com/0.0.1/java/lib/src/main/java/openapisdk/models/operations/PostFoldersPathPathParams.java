package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostFoldersPathPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=path")
    public String path;
    public PostFoldersPathPathParams withPath(String path) {
        this.path = path;
        return this;
    }
}