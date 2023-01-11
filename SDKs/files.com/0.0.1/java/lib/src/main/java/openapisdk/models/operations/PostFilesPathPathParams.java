package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostFilesPathPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=path")
    public String path;
    public PostFilesPathPathParams withPath(String path) {
        this.path = path;
        return this;
    }
}