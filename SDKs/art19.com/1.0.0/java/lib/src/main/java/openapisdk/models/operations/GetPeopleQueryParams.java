package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPeopleQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ids[]")
    public String[] ids;
    public GetPeopleQueryParams withIds(String[] ids) {
        this.ids = ids;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page[number]")
    public Long pageNumber;
    public GetPeopleQueryParams withPageNumber(Long pageNumber) {
        this.pageNumber = pageNumber;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page[size]")
    public Long pageSize;
    public GetPeopleQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=q")
    public String q;
    public GetPeopleQueryParams withQ(String q) {
        this.q = q;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=sort")
    public GetPeopleSortEnum[] sort;
    public GetPeopleQueryParams withSort(GetPeopleSortEnum[] sort) {
        this.sort = sort;
        return this;
    }
}