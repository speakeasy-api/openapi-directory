package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostBundleQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=action")
    public String action;
    public PostBundleQueryParams withAction(String action) {
        this.action = action;
        return this;
    }
}