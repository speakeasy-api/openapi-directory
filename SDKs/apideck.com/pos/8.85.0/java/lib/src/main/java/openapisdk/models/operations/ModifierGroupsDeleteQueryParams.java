package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ModifierGroupsDeleteQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=raw")
    public Boolean raw;
    public ModifierGroupsDeleteQueryParams withRaw(Boolean raw) {
        this.raw = raw;
        return this;
    }
}