package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostUpdateDefaultSearchFieldQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostUpdateDefaultSearchFieldActionEnum action;
    public PostUpdateDefaultSearchFieldQueryParams withAction(PostUpdateDefaultSearchFieldActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostUpdateDefaultSearchFieldVersionEnum version;
    public PostUpdateDefaultSearchFieldQueryParams withVersion(PostUpdateDefaultSearchFieldVersionEnum version) {
        this.version = version;
        return this;
    }
}