package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteFpgaImageQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDeleteFpgaImageActionEnum action;
    public PostDeleteFpgaImageQueryParams withAction(PostDeleteFpgaImageActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDeleteFpgaImageVersionEnum version;
    public PostDeleteFpgaImageQueryParams withVersion(PostDeleteFpgaImageVersionEnum version) {
        this.version = version;
        return this;
    }
}