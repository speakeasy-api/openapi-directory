package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostSetDesiredCapacityQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostSetDesiredCapacityActionEnum action;
    public PostSetDesiredCapacityQueryParams withAction(PostSetDesiredCapacityActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostSetDesiredCapacityVersionEnum version;
    public PostSetDesiredCapacityQueryParams withVersion(PostSetDesiredCapacityVersionEnum version) {
        this.version = version;
        return this;
    }
}