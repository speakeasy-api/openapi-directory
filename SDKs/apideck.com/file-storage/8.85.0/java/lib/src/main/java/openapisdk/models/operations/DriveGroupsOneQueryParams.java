package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DriveGroupsOneQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=raw")
    public Boolean raw;
    public DriveGroupsOneQueryParams withRaw(Boolean raw) {
        this.raw = raw;
        return this;
    }
}