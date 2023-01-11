package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetListDomainNamesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetListDomainNamesActionEnum action;
    public GetListDomainNamesQueryParams withAction(GetListDomainNamesActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetListDomainNamesVersionEnum version;
    public GetListDomainNamesQueryParams withVersion(GetListDomainNamesVersionEnum version) {
        this.version = version;
        return this;
    }
}