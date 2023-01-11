package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DatabaseListDocumentsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filters")
    public String[] filters;
    public DatabaseListDocumentsQueryParams withFilters(String[] filters) {
        this.filters = filters;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Integer limit;
    public DatabaseListDocumentsQueryParams withLimit(Integer limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=offset")
    public Integer offset;
    public DatabaseListDocumentsQueryParams withOffset(Integer offset) {
        this.offset = offset;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=orderCast")
    public String orderCast;
    public DatabaseListDocumentsQueryParams withOrderCast(String orderCast) {
        this.orderCast = orderCast;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=orderField")
    public String orderField;
    public DatabaseListDocumentsQueryParams withOrderField(String orderField) {
        this.orderField = orderField;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=orderType")
    public String orderType;
    public DatabaseListDocumentsQueryParams withOrderType(String orderType) {
        this.orderType = orderType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search")
    public String search;
    public DatabaseListDocumentsQueryParams withSearch(String search) {
        this.search = search;
        return this;
    }
}