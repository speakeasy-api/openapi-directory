package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostStopDbInstanceQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostStopDbInstanceActionEnum action;
    public PostStopDbInstanceQueryParams withAction(PostStopDbInstanceActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostStopDbInstanceVersionEnum version;
    public PostStopDbInstanceQueryParams withVersion(PostStopDbInstanceVersionEnum version) {
        this.version = version;
        return this;
    }
}