package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostListReceiptFiltersQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostListReceiptFiltersActionEnum action;
    public PostListReceiptFiltersQueryParams withAction(PostListReceiptFiltersActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostListReceiptFiltersVersionEnum version;
    public PostListReceiptFiltersQueryParams withVersion(PostListReceiptFiltersVersionEnum version) {
        this.version = version;
        return this;
    }
}