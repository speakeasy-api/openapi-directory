package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAttachVolumeQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostAttachVolumeActionEnum action;
    public PostAttachVolumeQueryParams withAction(PostAttachVolumeActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostAttachVolumeVersionEnum version;
    public PostAttachVolumeQueryParams withVersion(PostAttachVolumeVersionEnum version) {
        this.version = version;
        return this;
    }
}