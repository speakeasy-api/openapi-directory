package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetUpdateDefaultSearchFieldQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetUpdateDefaultSearchFieldActionEnum action;
    public GetUpdateDefaultSearchFieldQueryParams withAction(GetUpdateDefaultSearchFieldActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DefaultSearchField")
    public String defaultSearchField;
    public GetUpdateDefaultSearchFieldQueryParams withDefaultSearchField(String defaultSearchField) {
        this.defaultSearchField = defaultSearchField;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DomainName")
    public String domainName;
    public GetUpdateDefaultSearchFieldQueryParams withDomainName(String domainName) {
        this.domainName = domainName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetUpdateDefaultSearchFieldVersionEnum version;
    public GetUpdateDefaultSearchFieldQueryParams withVersion(GetUpdateDefaultSearchFieldVersionEnum version) {
        this.version = version;
        return this;
    }
}