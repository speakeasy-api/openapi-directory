package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UsersDeleteQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=raw")
    public Boolean raw;
    public UsersDeleteQueryParams withRaw(Boolean raw) {
        this.raw = raw;
        return this;
    }
}