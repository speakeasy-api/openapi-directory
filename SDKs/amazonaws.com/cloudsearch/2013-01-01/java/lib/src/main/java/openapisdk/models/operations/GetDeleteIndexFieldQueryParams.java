package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDeleteIndexFieldQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDeleteIndexFieldActionEnum action;
    public GetDeleteIndexFieldQueryParams withAction(GetDeleteIndexFieldActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DomainName")
    public String domainName;
    public GetDeleteIndexFieldQueryParams withDomainName(String domainName) {
        this.domainName = domainName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=IndexFieldName")
    public String indexFieldName;
    public GetDeleteIndexFieldQueryParams withIndexFieldName(String indexFieldName) {
        this.indexFieldName = indexFieldName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDeleteIndexFieldVersionEnum version;
    public GetDeleteIndexFieldQueryParams withVersion(GetDeleteIndexFieldVersionEnum version) {
        this.version = version;
        return this;
    }
}