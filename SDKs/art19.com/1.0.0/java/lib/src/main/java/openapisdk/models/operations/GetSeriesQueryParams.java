package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSeriesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ad_rep_account_id")
    public String adRepAccountId;
    public GetSeriesQueryParams withAdRepAccountId(String adRepAccountId) {
        this.adRepAccountId = adRepAccountId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ids[]")
    public String[] ids;
    public GetSeriesQueryParams withIds(String[] ids) {
        this.ids = ids;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=network_id")
    public String networkId;
    public GetSeriesQueryParams withNetworkId(String networkId) {
        this.networkId = networkId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page[number]")
    public Long pageNumber;
    public GetSeriesQueryParams withPageNumber(Long pageNumber) {
        this.pageNumber = pageNumber;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page[size]")
    public Long pageSize;
    public GetSeriesQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=q")
    public String q;
    public GetSeriesQueryParams withQ(String q) {
        this.q = q;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=sort")
    public GetSeriesSortEnum[] sort;
    public GetSeriesQueryParams withSort(GetSeriesSortEnum[] sort) {
        this.sort = sort;
        return this;
    }
}