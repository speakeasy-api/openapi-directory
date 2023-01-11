package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteLocksPathPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=path")
    public String path;
    public DeleteLocksPathPathParams withPath(String path) {
        this.path = path;
        return this;
    }
}