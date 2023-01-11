package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RegistryUpdateProjectQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=update_mask")
    public String updateMask;
    public RegistryUpdateProjectQueryParams withUpdateMask(String updateMask) {
        this.updateMask = updateMask;
        return this;
    }
}