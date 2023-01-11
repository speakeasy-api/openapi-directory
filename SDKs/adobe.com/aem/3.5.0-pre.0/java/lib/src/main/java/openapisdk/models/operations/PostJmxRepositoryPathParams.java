package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostJmxRepositoryPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=action")
    public String action;
    public PostJmxRepositoryPathParams withAction(String action) {
        this.action = action;
        return this;
    }
}