package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ContactsAddQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=raw")
    public Boolean raw;
    public ContactsAddQueryParams withRaw(Boolean raw) {
        this.raw = raw;
        return this;
    }
}