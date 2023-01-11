package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ModifierGroupsUpdateQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=raw")
    public Boolean raw;
    public ModifierGroupsUpdateQueryParams withRaw(Boolean raw) {
        this.raw = raw;
        return this;
    }
}