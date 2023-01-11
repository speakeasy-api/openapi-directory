package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListAllDropletsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;
    public ListAllDropletsQueryParams withPage(Long page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Long perPage;
    public ListAllDropletsQueryParams withPerPage(Long perPage) {
        this.perPage = perPage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=tag_name")
    public String tagName;
    public ListAllDropletsQueryParams withTagName(String tagName) {
        this.tagName = tagName;
        return this;
    }
}