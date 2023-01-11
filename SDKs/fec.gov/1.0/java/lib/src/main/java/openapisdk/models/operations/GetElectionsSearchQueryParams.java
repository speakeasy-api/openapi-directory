package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetElectionsSearchQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=api_key")
    public String apiKey;
    public GetElectionsSearchQueryParams withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=cycle")
    public Integer[] cycle;
    public GetElectionsSearchQueryParams withCycle(Integer[] cycle) {
        this.cycle = cycle;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=district")
    public String[] district;
    public GetElectionsSearchQueryParams withDistrict(String[] district) {
        this.district = district;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=office")
    public GetElectionsSearchOfficeEnum[] office;
    public GetElectionsSearchQueryParams withOffice(GetElectionsSearchOfficeEnum[] office) {
        this.office = office;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Integer page;
    public GetElectionsSearchQueryParams withPage(Integer page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Integer perPage;
    public GetElectionsSearchQueryParams withPerPage(Integer perPage) {
        this.perPage = perPage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public String[] sort;
    public GetElectionsSearchQueryParams withSort(String[] sort) {
        this.sort = sort;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort_hide_null")
    public Boolean sortHideNull;
    public GetElectionsSearchQueryParams withSortHideNull(Boolean sortHideNull) {
        this.sortHideNull = sortHideNull;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort_null_only")
    public Boolean sortNullOnly;
    public GetElectionsSearchQueryParams withSortNullOnly(Boolean sortNullOnly) {
        this.sortNullOnly = sortNullOnly;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort_nulls_last")
    public Boolean sortNullsLast;
    public GetElectionsSearchQueryParams withSortNullsLast(Boolean sortNullsLast) {
        this.sortNullsLast = sortNullsLast;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=state")
    public String[] state;
    public GetElectionsSearchQueryParams withState(String[] state) {
        this.state = state;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=zip")
    public Integer[] zip;
    public GetElectionsSearchQueryParams withZip(Integer[] zip) {
        this.zip = zip;
        return this;
    }
}