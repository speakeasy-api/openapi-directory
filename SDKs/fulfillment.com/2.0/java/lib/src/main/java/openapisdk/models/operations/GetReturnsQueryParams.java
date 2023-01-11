package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetReturnsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fromDate")
    public String fromDate;
    public GetReturnsQueryParams withFromDate(String fromDate) {
        this.fromDate = fromDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Long limit;
    public GetReturnsQueryParams withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;
    public GetReturnsQueryParams withPage(Long page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=toDate")
    public String toDate;
    public GetReturnsQueryParams withToDate(String toDate) {
        this.toDate = toDate;
        return this;
    }
}