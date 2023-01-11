package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class LocationsDeleteQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=raw")
    public Boolean raw;
    public LocationsDeleteQueryParams withRaw(Boolean raw) {
        this.raw = raw;
        return this;
    }
}