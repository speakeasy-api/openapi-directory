package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ModifiersUpdateQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=raw")
    public Boolean raw;
    public ModifiersUpdateQueryParams withRaw(Boolean raw) {
        this.raw = raw;
        return this;
    }
}