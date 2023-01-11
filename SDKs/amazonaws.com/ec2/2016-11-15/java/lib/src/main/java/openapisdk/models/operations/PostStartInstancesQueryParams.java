package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostStartInstancesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostStartInstancesActionEnum action;
    public PostStartInstancesQueryParams withAction(PostStartInstancesActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostStartInstancesVersionEnum version;
    public PostStartInstancesQueryParams withVersion(PostStartInstancesVersionEnum version) {
        this.version = version;
        return this;
    }
}