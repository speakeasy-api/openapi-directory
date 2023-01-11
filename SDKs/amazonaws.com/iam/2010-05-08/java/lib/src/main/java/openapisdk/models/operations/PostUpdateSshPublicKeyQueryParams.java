package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostUpdateSshPublicKeyQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostUpdateSshPublicKeyActionEnum action;
    public PostUpdateSshPublicKeyQueryParams withAction(PostUpdateSshPublicKeyActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostUpdateSshPublicKeyVersionEnum version;
    public PostUpdateSshPublicKeyQueryParams withVersion(PostUpdateSshPublicKeyVersionEnum version) {
        this.version = version;
        return this;
    }
}