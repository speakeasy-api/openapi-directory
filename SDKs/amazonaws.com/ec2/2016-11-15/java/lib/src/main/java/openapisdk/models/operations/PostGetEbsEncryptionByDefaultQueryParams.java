package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostGetEbsEncryptionByDefaultQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostGetEbsEncryptionByDefaultActionEnum action;
    public PostGetEbsEncryptionByDefaultQueryParams withAction(PostGetEbsEncryptionByDefaultActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostGetEbsEncryptionByDefaultVersionEnum version;
    public PostGetEbsEncryptionByDefaultQueryParams withVersion(PostGetEbsEncryptionByDefaultVersionEnum version) {
        this.version = version;
        return this;
    }
}