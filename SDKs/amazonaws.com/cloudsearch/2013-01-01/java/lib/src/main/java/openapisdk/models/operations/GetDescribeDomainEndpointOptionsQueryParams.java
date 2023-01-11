package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDescribeDomainEndpointOptionsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDescribeDomainEndpointOptionsActionEnum action;
    public GetDescribeDomainEndpointOptionsQueryParams withAction(GetDescribeDomainEndpointOptionsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Deployed")
    public Boolean deployed;
    public GetDescribeDomainEndpointOptionsQueryParams withDeployed(Boolean deployed) {
        this.deployed = deployed;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DomainName")
    public String domainName;
    public GetDescribeDomainEndpointOptionsQueryParams withDomainName(String domainName) {
        this.domainName = domainName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDescribeDomainEndpointOptionsVersionEnum version;
    public GetDescribeDomainEndpointOptionsQueryParams withVersion(GetDescribeDomainEndpointOptionsVersionEnum version) {
        this.version = version;
        return this;
    }
}