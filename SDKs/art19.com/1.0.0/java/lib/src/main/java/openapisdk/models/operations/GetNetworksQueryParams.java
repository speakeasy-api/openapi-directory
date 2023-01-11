package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetNetworksQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=ad_deal_status")
    public GetNetworksAdDealStatusEnum[] adDealStatus;
    public GetNetworksQueryParams withAdDealStatus(GetNetworksAdDealStatusEnum[] adDealStatus) {
        this.adDealStatus = adDealStatus;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ad_rep_account_id")
    public String adRepAccountId;
    public GetNetworksQueryParams withAdRepAccountId(String adRepAccountId) {
        this.adRepAccountId = adRepAccountId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ids[]")
    public String[] ids;
    public GetNetworksQueryParams withIds(String[] ids) {
        this.ids = ids;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page[number]")
    public Long pageNumber;
    public GetNetworksQueryParams withPageNumber(Long pageNumber) {
        this.pageNumber = pageNumber;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page[size]")
    public Long pageSize;
    public GetNetworksQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=q")
    public String q;
    public GetNetworksQueryParams withQ(String q) {
        this.q = q;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=sort")
    public GetNetworksSortEnum[] sort;
    public GetNetworksQueryParams withSort(GetNetworksSortEnum[] sort) {
        this.sort = sort;
        return this;
    }
}