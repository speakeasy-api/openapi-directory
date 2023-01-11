package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateFpgaImageQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostCreateFpgaImageActionEnum action;
    public PostCreateFpgaImageQueryParams withAction(PostCreateFpgaImageActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostCreateFpgaImageVersionEnum version;
    public PostCreateFpgaImageQueryParams withVersion(PostCreateFpgaImageVersionEnum version) {
        this.version = version;
        return this;
    }
}