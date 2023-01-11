package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostImportKeyPairQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostImportKeyPairActionEnum action;
    public PostImportKeyPairQueryParams withAction(PostImportKeyPairActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostImportKeyPairVersionEnum version;
    public PostImportKeyPairQueryParams withVersion(PostImportKeyPairVersionEnum version) {
        this.version = version;
        return this;
    }
}