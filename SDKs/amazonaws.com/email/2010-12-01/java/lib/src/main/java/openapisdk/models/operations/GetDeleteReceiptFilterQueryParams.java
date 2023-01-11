package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDeleteReceiptFilterQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDeleteReceiptFilterActionEnum action;
    public GetDeleteReceiptFilterQueryParams withAction(GetDeleteReceiptFilterActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=FilterName")
    public String filterName;
    public GetDeleteReceiptFilterQueryParams withFilterName(String filterName) {
        this.filterName = filterName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDeleteReceiptFilterVersionEnum version;
    public GetDeleteReceiptFilterQueryParams withVersion(GetDeleteReceiptFilterVersionEnum version) {
        this.version = version;
        return this;
    }
}