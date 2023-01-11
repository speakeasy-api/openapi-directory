package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteSshPublicKeyQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDeleteSshPublicKeyActionEnum action;
    public PostDeleteSshPublicKeyQueryParams withAction(PostDeleteSshPublicKeyActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDeleteSshPublicKeyVersionEnum version;
    public PostDeleteSshPublicKeyQueryParams withVersion(PostDeleteSshPublicKeyVersionEnum version) {
        this.version = version;
        return this;
    }
}