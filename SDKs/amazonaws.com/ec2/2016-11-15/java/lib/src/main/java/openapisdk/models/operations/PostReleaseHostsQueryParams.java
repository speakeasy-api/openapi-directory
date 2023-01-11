package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostReleaseHostsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostReleaseHostsActionEnum action;
    public PostReleaseHostsQueryParams withAction(PostReleaseHostsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostReleaseHostsVersionEnum version;
    public PostReleaseHostsQueryParams withVersion(PostReleaseHostsVersionEnum version) {
        this.version = version;
        return this;
    }
}