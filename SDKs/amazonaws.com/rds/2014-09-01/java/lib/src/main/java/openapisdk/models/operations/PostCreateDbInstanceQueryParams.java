package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateDbInstanceQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostCreateDbInstanceActionEnum action;
    public PostCreateDbInstanceQueryParams withAction(PostCreateDbInstanceActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostCreateDbInstanceVersionEnum version;
    public PostCreateDbInstanceQueryParams withVersion(PostCreateDbInstanceVersionEnum version) {
        this.version = version;
        return this;
    }
}