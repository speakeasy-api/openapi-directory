package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDisableEbsEncryptionByDefaultQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDisableEbsEncryptionByDefaultActionEnum action;
    public PostDisableEbsEncryptionByDefaultQueryParams withAction(PostDisableEbsEncryptionByDefaultActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDisableEbsEncryptionByDefaultVersionEnum version;
    public PostDisableEbsEncryptionByDefaultQueryParams withVersion(PostDisableEbsEncryptionByDefaultVersionEnum version) {
        this.version = version;
        return this;
    }
}