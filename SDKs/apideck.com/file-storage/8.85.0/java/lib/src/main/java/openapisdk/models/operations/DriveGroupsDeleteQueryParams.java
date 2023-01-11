package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DriveGroupsDeleteQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=raw")
    public Boolean raw;
    public DriveGroupsDeleteQueryParams withRaw(Boolean raw) {
        this.raw = raw;
        return this;
    }
}