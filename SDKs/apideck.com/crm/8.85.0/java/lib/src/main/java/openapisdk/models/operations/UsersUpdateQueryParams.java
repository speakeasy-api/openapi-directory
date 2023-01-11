package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UsersUpdateQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=raw")
    public Boolean raw;
    public UsersUpdateQueryParams withRaw(Boolean raw) {
        this.raw = raw;
        return this;
    }
}