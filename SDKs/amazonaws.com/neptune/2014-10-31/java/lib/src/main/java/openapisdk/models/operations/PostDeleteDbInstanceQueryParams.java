package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteDbInstanceQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDeleteDbInstanceActionEnum action;
    public PostDeleteDbInstanceQueryParams withAction(PostDeleteDbInstanceActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDeleteDbInstanceVersionEnum version;
    public PostDeleteDbInstanceQueryParams withVersion(PostDeleteDbInstanceVersionEnum version) {
        this.version = version;
        return this;
    }
}