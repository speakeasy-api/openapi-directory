package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostEnableEbsEncryptionByDefaultQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostEnableEbsEncryptionByDefaultActionEnum action;
    public PostEnableEbsEncryptionByDefaultQueryParams withAction(PostEnableEbsEncryptionByDefaultActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostEnableEbsEncryptionByDefaultVersionEnum version;
    public PostEnableEbsEncryptionByDefaultQueryParams withVersion(PostEnableEbsEncryptionByDefaultVersionEnum version) {
        this.version = version;
        return this;
    }
}