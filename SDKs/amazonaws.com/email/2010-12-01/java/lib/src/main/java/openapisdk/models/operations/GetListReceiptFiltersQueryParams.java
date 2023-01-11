package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetListReceiptFiltersQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetListReceiptFiltersActionEnum action;
    public GetListReceiptFiltersQueryParams withAction(GetListReceiptFiltersActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetListReceiptFiltersVersionEnum version;
    public GetListReceiptFiltersQueryParams withVersion(GetListReceiptFiltersVersionEnum version) {
        this.version = version;
        return this;
    }
}