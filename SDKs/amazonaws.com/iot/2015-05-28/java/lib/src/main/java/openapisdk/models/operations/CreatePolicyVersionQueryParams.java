package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreatePolicyVersionQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=setAsDefault")
    public Boolean setAsDefault;
    public CreatePolicyVersionQueryParams withSetAsDefault(Boolean setAsDefault) {
        this.setAsDefault = setAsDefault;
        return this;
    }
}