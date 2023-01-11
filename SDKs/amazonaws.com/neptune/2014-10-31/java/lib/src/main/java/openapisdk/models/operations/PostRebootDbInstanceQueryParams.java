package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostRebootDbInstanceQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostRebootDbInstanceActionEnum action;
    public PostRebootDbInstanceQueryParams withAction(PostRebootDbInstanceActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostRebootDbInstanceVersionEnum version;
    public PostRebootDbInstanceQueryParams withVersion(PostRebootDbInstanceVersionEnum version) {
        this.version = version;
        return this;
    }
}