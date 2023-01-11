package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateKeyPairQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostCreateKeyPairActionEnum action;
    public PostCreateKeyPairQueryParams withAction(PostCreateKeyPairActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostCreateKeyPairVersionEnum version;
    public PostCreateKeyPairQueryParams withVersion(PostCreateKeyPairVersionEnum version) {
        this.version = version;
        return this;
    }
}