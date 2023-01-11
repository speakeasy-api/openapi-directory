package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostRotateEncryptionKeyQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostRotateEncryptionKeyActionEnum action;
    public PostRotateEncryptionKeyQueryParams withAction(PostRotateEncryptionKeyActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostRotateEncryptionKeyVersionEnum version;
    public PostRotateEncryptionKeyQueryParams withVersion(PostRotateEncryptionKeyVersionEnum version) {
        this.version = version;
        return this;
    }
}