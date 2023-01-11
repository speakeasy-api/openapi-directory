package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ModifiersAddQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=raw")
    public Boolean raw;
    public ModifiersAddQueryParams withRaw(Boolean raw) {
        this.raw = raw;
        return this;
    }
}