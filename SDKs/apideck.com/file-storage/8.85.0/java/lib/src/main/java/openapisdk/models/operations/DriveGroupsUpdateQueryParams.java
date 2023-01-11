package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DriveGroupsUpdateQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=raw")
    public Boolean raw;
    public DriveGroupsUpdateQueryParams withRaw(Boolean raw) {
        this.raw = raw;
        return this;
    }
}