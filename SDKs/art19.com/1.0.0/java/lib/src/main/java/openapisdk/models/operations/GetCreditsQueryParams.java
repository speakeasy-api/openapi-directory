package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCreditsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=creditable_id")
    public String creditableId;
    public GetCreditsQueryParams withCreditableId(String creditableId) {
        this.creditableId = creditableId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=creditable_type")
    public GetCreditsCreditableTypeEnum creditableType;
    public GetCreditsQueryParams withCreditableType(GetCreditsCreditableTypeEnum creditableType) {
        this.creditableType = creditableType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ids[]")
    public String[] ids;
    public GetCreditsQueryParams withIds(String[] ids) {
        this.ids = ids;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page[number]")
    public Long pageNumber;
    public GetCreditsQueryParams withPageNumber(Long pageNumber) {
        this.pageNumber = pageNumber;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page[size]")
    public Long pageSize;
    public GetCreditsQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=sort")
    public GetCreditsSortEnum[] sort;
    public GetCreditsQueryParams withSort(GetCreditsSortEnum[] sort) {
        this.sort = sort;
        return this;
    }
}