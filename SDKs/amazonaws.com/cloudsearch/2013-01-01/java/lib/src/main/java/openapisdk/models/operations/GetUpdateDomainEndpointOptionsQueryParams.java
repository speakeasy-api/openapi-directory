package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetUpdateDomainEndpointOptionsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetUpdateDomainEndpointOptionsActionEnum action;
    public GetUpdateDomainEndpointOptionsQueryParams withAction(GetUpdateDomainEndpointOptionsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DomainEndpointOptions")
    public GetUpdateDomainEndpointOptionsDomainEndpointOptions domainEndpointOptions;
    public GetUpdateDomainEndpointOptionsQueryParams withDomainEndpointOptions(GetUpdateDomainEndpointOptionsDomainEndpointOptions domainEndpointOptions) {
        this.domainEndpointOptions = domainEndpointOptions;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DomainName")
    public String domainName;
    public GetUpdateDomainEndpointOptionsQueryParams withDomainName(String domainName) {
        this.domainName = domainName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetUpdateDomainEndpointOptionsVersionEnum version;
    public GetUpdateDomainEndpointOptionsQueryParams withVersion(GetUpdateDomainEndpointOptionsVersionEnum version) {
        this.version = version;
        return this;
    }
}