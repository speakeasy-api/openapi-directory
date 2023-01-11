package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostSetSecurityTokenServicePreferencesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostSetSecurityTokenServicePreferencesActionEnum action;
    public PostSetSecurityTokenServicePreferencesQueryParams withAction(PostSetSecurityTokenServicePreferencesActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostSetSecurityTokenServicePreferencesVersionEnum version;
    public PostSetSecurityTokenServicePreferencesQueryParams withVersion(PostSetSecurityTokenServicePreferencesVersionEnum version) {
        this.version = version;
        return this;
    }
}