package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetListTagsForResourceQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetListTagsForResourceActionEnum action;
    public GetListTagsForResourceQueryParams withAction(GetListTagsForResourceActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ResourceArn")
    public String resourceArn;
    public GetListTagsForResourceQueryParams withResourceArn(String resourceArn) {
        this.resourceArn = resourceArn;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetListTagsForResourceVersionEnum version;
    public GetListTagsForResourceQueryParams withVersion(GetListTagsForResourceVersionEnum version) {
        this.version = version;
        return this;
    }
}