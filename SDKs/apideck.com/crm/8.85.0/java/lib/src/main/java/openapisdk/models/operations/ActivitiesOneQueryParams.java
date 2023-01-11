package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ActivitiesOneQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=raw")
    public Boolean raw;
    public ActivitiesOneQueryParams withRaw(Boolean raw) {
        this.raw = raw;
        return this;
    }
}