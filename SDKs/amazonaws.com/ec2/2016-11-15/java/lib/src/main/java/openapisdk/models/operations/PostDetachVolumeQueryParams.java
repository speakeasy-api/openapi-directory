package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDetachVolumeQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDetachVolumeActionEnum action;
    public PostDetachVolumeQueryParams withAction(PostDetachVolumeActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDetachVolumeVersionEnum version;
    public PostDetachVolumeQueryParams withVersion(PostDetachVolumeVersionEnum version) {
        this.version = version;
        return this;
    }
}