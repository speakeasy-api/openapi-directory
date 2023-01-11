package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDescribeSynonymOptionsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDescribeSynonymOptionsActionEnum action;
    public GetDescribeSynonymOptionsQueryParams withAction(GetDescribeSynonymOptionsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DomainName")
    public String domainName;
    public GetDescribeSynonymOptionsQueryParams withDomainName(String domainName) {
        this.domainName = domainName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDescribeSynonymOptionsVersionEnum version;
    public GetDescribeSynonymOptionsQueryParams withVersion(GetDescribeSynonymOptionsVersionEnum version) {
        this.version = version;
        return this;
    }
}