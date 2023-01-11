package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DriveGroupsAddQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=raw")
    public Boolean raw;
    public DriveGroupsAddQueryParams withRaw(Boolean raw) {
        this.raw = raw;
        return this;
    }
}