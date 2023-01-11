package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RegistryUpdateApiQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=update_mask")
    public String updateMask;
    public RegistryUpdateApiQueryParams withUpdateMask(String updateMask) {
        this.updateMask = updateMask;
        return this;
    }
}