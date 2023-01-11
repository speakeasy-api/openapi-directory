package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UsersOneQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=raw")
    public Boolean raw;
    public UsersOneQueryParams withRaw(Boolean raw) {
        this.raw = raw;
        return this;
    }
}