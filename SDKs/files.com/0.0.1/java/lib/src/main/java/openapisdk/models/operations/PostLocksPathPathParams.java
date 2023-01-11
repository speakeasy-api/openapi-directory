package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostLocksPathPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=path")
    public String path;
    public PostLocksPathPathParams withPath(String path) {
        this.path = path;
        return this;
    }
}