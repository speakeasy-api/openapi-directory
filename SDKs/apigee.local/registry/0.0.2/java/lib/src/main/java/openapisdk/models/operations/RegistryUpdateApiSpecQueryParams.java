package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RegistryUpdateApiSpecQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=allow_missing")
    public String allowMissing;
    public RegistryUpdateApiSpecQueryParams withAllowMissing(String allowMissing) {
        this.allowMissing = allowMissing;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=update_mask")
    public String updateMask;
    public RegistryUpdateApiSpecQueryParams withUpdateMask(String updateMask) {
        this.updateMask = updateMask;
        return this;
    }
}