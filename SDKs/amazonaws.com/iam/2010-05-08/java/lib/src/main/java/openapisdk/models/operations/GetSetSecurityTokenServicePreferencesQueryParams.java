package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSetSecurityTokenServicePreferencesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetSetSecurityTokenServicePreferencesActionEnum action;
    public GetSetSecurityTokenServicePreferencesQueryParams withAction(GetSetSecurityTokenServicePreferencesActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=GlobalEndpointTokenVersion")
    public GetSetSecurityTokenServicePreferencesGlobalEndpointTokenVersionEnum globalEndpointTokenVersion;
    public GetSetSecurityTokenServicePreferencesQueryParams withGlobalEndpointTokenVersion(GetSetSecurityTokenServicePreferencesGlobalEndpointTokenVersionEnum globalEndpointTokenVersion) {
        this.globalEndpointTokenVersion = globalEndpointTokenVersion;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetSetSecurityTokenServicePreferencesVersionEnum version;
    public GetSetSecurityTokenServicePreferencesQueryParams withVersion(GetSetSecurityTokenServicePreferencesVersionEnum version) {
        this.version = version;
        return this;
    }
}