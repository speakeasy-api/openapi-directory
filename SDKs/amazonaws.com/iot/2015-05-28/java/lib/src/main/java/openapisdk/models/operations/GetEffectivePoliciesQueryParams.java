package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetEffectivePoliciesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=thingName")
    public String thingName;
    public GetEffectivePoliciesQueryParams withThingName(String thingName) {
        this.thingName = thingName;
        return this;
    }
}