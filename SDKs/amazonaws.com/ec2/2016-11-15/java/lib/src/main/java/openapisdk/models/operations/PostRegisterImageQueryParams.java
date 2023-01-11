package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostRegisterImageQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostRegisterImageActionEnum action;
    public PostRegisterImageQueryParams withAction(PostRegisterImageActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostRegisterImageVersionEnum version;
    public PostRegisterImageQueryParams withVersion(PostRegisterImageVersionEnum version) {
        this.version = version;
        return this;
    }
}