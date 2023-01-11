package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDeleteHsmConfigurationQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDeleteHsmConfigurationActionEnum action;
    public GetDeleteHsmConfigurationQueryParams withAction(GetDeleteHsmConfigurationActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=HsmConfigurationIdentifier")
    public String hsmConfigurationIdentifier;
    public GetDeleteHsmConfigurationQueryParams withHsmConfigurationIdentifier(String hsmConfigurationIdentifier) {
        this.hsmConfigurationIdentifier = hsmConfigurationIdentifier;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDeleteHsmConfigurationVersionEnum version;
    public GetDeleteHsmConfigurationQueryParams withVersion(GetDeleteHsmConfigurationVersionEnum version) {
        this.version = version;
        return this;
    }
}