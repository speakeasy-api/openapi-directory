package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostGetSshPublicKeyQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostGetSshPublicKeyActionEnum action;
    public PostGetSshPublicKeyQueryParams withAction(PostGetSshPublicKeyActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostGetSshPublicKeyVersionEnum version;
    public PostGetSshPublicKeyQueryParams withVersion(PostGetSshPublicKeyVersionEnum version) {
        this.version = version;
        return this;
    }
}