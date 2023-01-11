package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ActivitiesUpdateQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=raw")
    public Boolean raw;
    public ActivitiesUpdateQueryParams withRaw(Boolean raw) {
        this.raw = raw;
        return this;
    }
}