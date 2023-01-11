package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RegistryUpdateApiVersionQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=update_mask")
    public String updateMask;
    public RegistryUpdateApiVersionQueryParams withUpdateMask(String updateMask) {
        this.updateMask = updateMask;
        return this;
    }
}