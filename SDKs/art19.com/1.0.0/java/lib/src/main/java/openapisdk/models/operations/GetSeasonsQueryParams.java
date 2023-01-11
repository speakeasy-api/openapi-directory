package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSeasonsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ids[]")
    public String[] ids;
    public GetSeasonsQueryParams withIds(String[] ids) {
        this.ids = ids;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page[number]")
    public Long pageNumber;
    public GetSeasonsQueryParams withPageNumber(Long pageNumber) {
        this.pageNumber = pageNumber;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page[size]")
    public Long pageSize;
    public GetSeasonsQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=q")
    public String q;
    public GetSeasonsQueryParams withQ(String q) {
        this.q = q;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=series_id")
    public String seriesId;
    public GetSeasonsQueryParams withSeriesId(String seriesId) {
        this.seriesId = seriesId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=sort")
    public GetSeasonsSortEnum[] sort;
    public GetSeasonsQueryParams withSort(GetSeasonsSortEnum[] sort) {
        this.sort = sort;
        return this;
    }
}