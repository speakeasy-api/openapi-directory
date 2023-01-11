package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetClassificationsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ids[]")
    public String[] ids;
    public GetClassificationsQueryParams withIds(String[] ids) {
        this.ids = ids;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=is_country")
    public String isCountry;
    public GetClassificationsQueryParams withIsCountry(String isCountry) {
        this.isCountry = isCountry;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page[number]")
    public Long pageNumber;
    public GetClassificationsQueryParams withPageNumber(Long pageNumber) {
        this.pageNumber = pageNumber;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page[size]")
    public Long pageSize;
    public GetClassificationsQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=q")
    public String q;
    public GetClassificationsQueryParams withQ(String q) {
        this.q = q;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=sort")
    public GetClassificationsSortEnum[] sort;
    public GetClassificationsQueryParams withSort(GetClassificationsSortEnum[] sort) {
        this.sort = sort;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=type")
    public GetClassificationsTypeEnum type;
    public GetClassificationsQueryParams withType(GetClassificationsTypeEnum type) {
        this.type = type;
        return this;
    }
}