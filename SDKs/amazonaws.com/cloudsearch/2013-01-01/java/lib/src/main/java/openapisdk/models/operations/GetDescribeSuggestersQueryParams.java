package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDescribeSuggestersQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDescribeSuggestersActionEnum action;
    public GetDescribeSuggestersQueryParams withAction(GetDescribeSuggestersActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Deployed")
    public Boolean deployed;
    public GetDescribeSuggestersQueryParams withDeployed(Boolean deployed) {
        this.deployed = deployed;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DomainName")
    public String domainName;
    public GetDescribeSuggestersQueryParams withDomainName(String domainName) {
        this.domainName = domainName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=SuggesterNames")
    public String[] suggesterNames;
    public GetDescribeSuggestersQueryParams withSuggesterNames(String[] suggesterNames) {
        this.suggesterNames = suggesterNames;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDescribeSuggestersVersionEnum version;
    public GetDescribeSuggestersQueryParams withVersion(GetDescribeSuggestersVersionEnum version) {
        this.version = version;
        return this;
    }
}