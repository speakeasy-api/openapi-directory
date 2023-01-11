package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UsersAddQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=raw")
    public Boolean raw;
    public UsersAddQueryParams withRaw(Boolean raw) {
        this.raw = raw;
        return this;
    }
}