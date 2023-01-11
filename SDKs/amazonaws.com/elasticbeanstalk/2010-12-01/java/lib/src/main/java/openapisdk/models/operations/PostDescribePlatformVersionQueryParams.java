package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribePlatformVersionQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDescribePlatformVersionActionEnum action;
    public PostDescribePlatformVersionQueryParams withAction(PostDescribePlatformVersionActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDescribePlatformVersionVersionEnum version;
    public PostDescribePlatformVersionQueryParams withVersion(PostDescribePlatformVersionVersionEnum version) {
        this.version = version;
        return this;
    }
}