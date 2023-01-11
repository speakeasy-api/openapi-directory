package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetUpdateAvailabilityOptionsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetUpdateAvailabilityOptionsActionEnum action;
    public GetUpdateAvailabilityOptionsQueryParams withAction(GetUpdateAvailabilityOptionsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DomainName")
    public String domainName;
    public GetUpdateAvailabilityOptionsQueryParams withDomainName(String domainName) {
        this.domainName = domainName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MultiAZ")
    public Boolean multiAZ;
    public GetUpdateAvailabilityOptionsQueryParams withMultiAz(Boolean multiAZ) {
        this.multiAZ = multiAZ;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetUpdateAvailabilityOptionsVersionEnum version;
    public GetUpdateAvailabilityOptionsQueryParams withVersion(GetUpdateAvailabilityOptionsVersionEnum version) {
        this.version = version;
        return this;
    }
}