package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostUploadSshPublicKeyQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostUploadSshPublicKeyActionEnum action;
    public PostUploadSshPublicKeyQueryParams withAction(PostUploadSshPublicKeyActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostUploadSshPublicKeyVersionEnum version;
    public PostUploadSshPublicKeyQueryParams withVersion(PostUploadSshPublicKeyVersionEnum version) {
        this.version = version;
        return this;
    }
}