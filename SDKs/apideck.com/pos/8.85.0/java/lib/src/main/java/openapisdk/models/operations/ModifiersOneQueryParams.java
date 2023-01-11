package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ModifiersOneQueryParams {
    @SpeakeasyMetadata("queryParam:style=deepObject,explode=true,name=filter")
    public openapisdk.models.shared.ModifierGroupFilter filter;
    public ModifiersOneQueryParams withFilter(openapisdk.models.shared.ModifierGroupFilter filter) {
        this.filter = filter;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=raw")
    public Boolean raw;
    public ModifiersOneQueryParams withRaw(Boolean raw) {
        this.raw = raw;
        return this;
    }
}