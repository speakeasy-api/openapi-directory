package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetUpdateStemmingOptionsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetUpdateStemmingOptionsActionEnum action;
    public GetUpdateStemmingOptionsQueryParams withAction(GetUpdateStemmingOptionsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DomainName")
    public String domainName;
    public GetUpdateStemmingOptionsQueryParams withDomainName(String domainName) {
        this.domainName = domainName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Stems")
    public String stems;
    public GetUpdateStemmingOptionsQueryParams withStems(String stems) {
        this.stems = stems;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetUpdateStemmingOptionsVersionEnum version;
    public GetUpdateStemmingOptionsQueryParams withVersion(GetUpdateStemmingOptionsVersionEnum version) {
        this.version = version;
        return this;
    }
}