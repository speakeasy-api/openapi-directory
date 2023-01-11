package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostStartDbInstanceQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostStartDbInstanceActionEnum action;
    public PostStartDbInstanceQueryParams withAction(PostStartDbInstanceActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostStartDbInstanceVersionEnum version;
    public PostStartDbInstanceQueryParams withVersion(PostStartDbInstanceVersionEnum version) {
        this.version = version;
        return this;
    }
}