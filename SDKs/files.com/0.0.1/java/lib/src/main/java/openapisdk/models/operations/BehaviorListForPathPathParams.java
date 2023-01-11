package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BehaviorListForPathPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=path")
    public String path;
    public BehaviorListForPathPathParams withPath(String path) {
        this.path = path;
        return this;
    }
}