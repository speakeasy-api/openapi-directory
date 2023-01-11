package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ModifiersDeleteQueryParams {
    @SpeakeasyMetadata("queryParam:style=deepObject,explode=true,name=filter")
    public openapisdk.models.shared.ModifierGroupFilter filter;
    public ModifiersDeleteQueryParams withFilter(openapisdk.models.shared.ModifierGroupFilter filter) {
        this.filter = filter;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=raw")
    public Boolean raw;
    public ModifiersDeleteQueryParams withRaw(Boolean raw) {
        this.raw = raw;
        return this;
    }
}