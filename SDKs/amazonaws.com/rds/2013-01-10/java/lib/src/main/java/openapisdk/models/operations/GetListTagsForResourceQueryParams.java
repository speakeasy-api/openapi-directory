package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetListTagsForResourceQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetListTagsForResourceActionEnum action;
    public GetListTagsForResourceQueryParams withAction(GetListTagsForResourceActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ResourceName")
    public String resourceName;
    public GetListTagsForResourceQueryParams withResourceName(String resourceName) {
        this.resourceName = resourceName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetListTagsForResourceVersionEnum version;
    public GetListTagsForResourceQueryParams withVersion(GetListTagsForResourceVersionEnum version) {
        this.version = version;
        return this;
    }
}