package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostPathPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=path")
    public String path;
    public PostPathPathParams withPath(String path) {
        this.path = path;
        return this;
    }
}