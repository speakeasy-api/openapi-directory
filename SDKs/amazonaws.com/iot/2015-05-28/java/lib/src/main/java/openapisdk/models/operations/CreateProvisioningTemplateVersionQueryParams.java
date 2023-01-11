package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateProvisioningTemplateVersionQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=setAsDefault")
    public Boolean setAsDefault;
    public CreateProvisioningTemplateVersionQueryParams withSetAsDefault(Boolean setAsDefault) {
        this.setAsDefault = setAsDefault;
        return this;
    }
}