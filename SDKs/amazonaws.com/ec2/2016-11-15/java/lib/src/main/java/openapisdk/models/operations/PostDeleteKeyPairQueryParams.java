package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteKeyPairQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDeleteKeyPairActionEnum action;
    public PostDeleteKeyPairQueryParams withAction(PostDeleteKeyPairActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDeleteKeyPairVersionEnum version;
    public PostDeleteKeyPairQueryParams withVersion(PostDeleteKeyPairVersionEnum version) {
        this.version = version;
        return this;
    }
}