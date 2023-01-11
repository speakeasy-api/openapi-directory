package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostBundleInstanceQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostBundleInstanceActionEnum action;
    public PostBundleInstanceQueryParams withAction(PostBundleInstanceActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostBundleInstanceVersionEnum version;
    public PostBundleInstanceQueryParams withVersion(PostBundleInstanceVersionEnum version) {
        this.version = version;
        return this;
    }
}