package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ContactsDeleteQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=raw")
    public Boolean raw;
    public ContactsDeleteQueryParams withRaw(Boolean raw) {
        this.raw = raw;
        return this;
    }
}