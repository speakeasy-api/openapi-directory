package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSetIdentityDkimEnabledQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetSetIdentityDkimEnabledActionEnum action;
    public GetSetIdentityDkimEnabledQueryParams withAction(GetSetIdentityDkimEnabledActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DkimEnabled")
    public Boolean dkimEnabled;
    public GetSetIdentityDkimEnabledQueryParams withDkimEnabled(Boolean dkimEnabled) {
        this.dkimEnabled = dkimEnabled;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Identity")
    public String identity;
    public GetSetIdentityDkimEnabledQueryParams withIdentity(String identity) {
        this.identity = identity;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetSetIdentityDkimEnabledVersionEnum version;
    public GetSetIdentityDkimEnabledQueryParams withVersion(GetSetIdentityDkimEnabledVersionEnum version) {
        this.version = version;
        return this;
    }
}