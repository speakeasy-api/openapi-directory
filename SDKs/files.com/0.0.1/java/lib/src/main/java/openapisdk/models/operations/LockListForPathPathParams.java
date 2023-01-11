package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class LockListForPathPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=path")
    public String path;
    public LockListForPathPathParams withPath(String path) {
        this.path = path;
        return this;
    }
}