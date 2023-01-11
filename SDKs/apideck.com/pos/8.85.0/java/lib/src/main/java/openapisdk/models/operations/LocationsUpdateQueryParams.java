package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class LocationsUpdateQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=raw")
    public Boolean raw;
    public LocationsUpdateQueryParams withRaw(Boolean raw) {
        this.raw = raw;
        return this;
    }
}